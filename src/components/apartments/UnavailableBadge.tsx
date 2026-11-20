import styles from './tracker.module.css';

export default function UnavailableBadge() {
  return <span className={styles.unavailableBadge} role="img" aria-label="Unavailable" title="Unavailable">×</span>;
}
