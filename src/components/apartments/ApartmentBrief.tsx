import type {Apartment} from '@/lib/apartments/model';
import styles from './tracker.module.css';

const recordLabels: Record<string,string> = {
  'tax lot year built': 'Year built (tax lot)',
  'tax lot alteration years': 'Alteration years (tax lot)',
  'hpd recent open bc count': 'Recent open HPD violations (B/C)',
};

function points(text: string) {
  return text.split(/\n|\s+\|\s+|(?<=[.!?])\s+(?=[A-Z])/)
    .map(line => line.trim()).filter(Boolean);
}

function Bullets({title, items}: {title:string; items:string[]}) {
  if (!items.length) return null;
  return <section><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></section>;
}

export default function ApartmentBrief({apartment}: {apartment:Apartment}) {
  const highlights = new Set<string>();
  const checks = new Set<string>();
  const records = new Map<string,string>();
  const facts = new Map<string,string>();
  const sources: string[] = [];
  function addNote(line: string) {
    const match = line.match(/^(Advertised income range|Household income|Eligibility|Building discrepancy|Other units|Outreach):\s*(.+)$/);
    if (match) facts.set(match[1], match[2]);
    else points(line).forEach(point => highlights.add(point));
  }
  apartment.notes.split('\n').forEach(addNote);
  let field = '';
  for (const line of apartment.research.split('\n')) {
    const match = line.match(/^(unit notes|remaining checks|questions|tax lot year built|tax lot alteration years|hpd recent open BC count|record scope):\s*(.*)$/i);
    if (match) field = match[1].toLowerCase();
    const value = (match ? match[2] : line).trim();
    if (!value || value === 'Property research pending.') continue;
    if (recordLabels[field]) records.set(recordLabels[field], value);
    else if (field === 'record scope') sources.push(value);
    else if (field === 'remaining checks' || field === 'questions') points(value).forEach(point => checks.add(point));
    else addNote(value);
  }
  if (!facts.size && !highlights.size && !records.size && !checks.size && !sources.length) return null;
  return <div className={styles.brief}>
    {facts.size > 0 && <section><h3>At a glance</h3><dl>{Array.from(facts, ([label,value]) =>
      <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>}
    <Bullets title="Apartment notes" items={[...highlights]} />
    {records.size > 0 && <section><h3>Building records</h3><dl>{Array.from(records, ([label,value]) =>
      <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>}
    <Bullets title="Still to confirm" items={[...checks]} />
    {sources.length > 0 && <details><summary>About the building records</summary><p>{sources.join(' ')}</p></details>}
  </div>;
}
