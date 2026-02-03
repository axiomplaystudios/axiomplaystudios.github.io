import styles from './Badge.module.css';

interface BadgeProps {
  label: string;
  tone?: 'neutral' | 'success' | 'warning' | 'info';
}

const Badge = ({ label, tone = 'neutral' }: BadgeProps) => (
  <span className={`${styles.badge} ${styles[tone]}`}>{label}</span>
);

export default Badge;
