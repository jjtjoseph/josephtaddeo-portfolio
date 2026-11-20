import {Apartment, availabilityGroup, safeUrl, visitDate, wasVisited} from '@/lib/apartments/model';
import UnavailableBadge from './UnavailableBadge';
import styles from './tracker.module.css';

function sourceLabel(url: string) {
  const host = new URL(url).hostname.replace(/^www\./, '');
  if (host === 'mail.google.com') return 'Email thread';
  if (host === 'streeteasy.com') return 'StreetEasy';
  if (host === 'zillow.com') return 'Zillow';
  return 'Listing source';
}

export default function ListingCard({apartment:a, selected, onSelect}:{
  apartment:Apartment; selected:boolean; onSelect:()=>void;
}) {
  const group = availabilityGroup(a);
  const finding = group === 'Unavailable' && a.review?.outcome !== 'Prior unavailable'
    ? a.review?.outcome || group : group;
  const evidence = a.availability.split(/\s*Checked [A-Z][a-z]+ \d{1,2}, \d{4}\./)[0]
    .replace(/^The unit is advertised for rent on StreetEasy\.\s*/, '');
  const checked = a.review && new Date(a.review.checked+'T12:00:00Z').toLocaleDateString('en-US',{month:'short',day:'numeric',timeZone:'UTC'});
  const unit = a.unit && a.unit !== 'None' ? ' #'+a.unit : '';
  const source = safeUrl(a.review?.url);
  const thread = safeUrl(a.threadUrl);
  return <article className={styles.listingCard} data-selected={selected}>
    <div className={styles.listingHeading}>
      <h2><button className={styles.openListing} onClick={onSelect} aria-pressed={selected}>
        {a.favorite?'★ ':''}{a.address}{unit}
        {a.fromKarina&&<span className={styles.kBadge} aria-label="Shared by Karina">K</span>}
      </button></h2>
      <strong>{a.rent === null ? 'Rent TBD' : '$'+a.rent.toLocaleString()}</strong>
    </div>
    <p className={styles.place}>{[a.neighborhood,a.borough].filter(Boolean).join(' · ')}</p>
    <div className={styles.cardSignals}>
      <span className={styles.finding} data-group={group}>{group==='Unavailable'&&<UnavailableBadge/>}{finding}</span>
      {wasVisited(a)&&<span className={styles.visitStamp}>Visited {visitDate(a)}</span>}
      {!['New','Toured','Unavailable'].includes(a.status)&&<span>{a.status}</span>}
      {a.lat===null&&<span>Unmapped</span>}
    </div>
    {evidence&&<p className={styles.evidence}>{evidence}</p>}
    {(checked||source||thread)&&<div className={styles.cardSources}>
      {checked&&<span>Checked {checked}</span>}
      {source&&source!==thread&&<a href={source} target="_blank" rel="noreferrer">{sourceLabel(source)}</a>}
      {thread&&<a href={thread} target="_blank" rel="noreferrer">Email thread</a>}
    </div>}
  </article>;
}
