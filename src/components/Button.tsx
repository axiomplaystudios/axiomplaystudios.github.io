import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'ghost';

interface BaseProps {
  variant?: Variant;
}

export const Button = ({
  variant = 'primary',
  className,
  type = 'button',
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={`${styles.button} ${styles[variant]} ${className ?? ''}`} type={type} {...props} />
);

export const ButtonLink = ({
  variant = 'primary',
  className,
  ...props
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className={`${styles.button} ${styles[variant]} ${className ?? ''}`} {...props} />
);
