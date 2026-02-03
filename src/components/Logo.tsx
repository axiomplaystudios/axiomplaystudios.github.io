const Logo = ({ label = 'Axiomplay Studios' }: { label?: string }) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 64 64"
    role="img"
    aria-label={label}
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#27e0a5" />
        <stop offset="55%" stopColor="#4f7dff" />
        <stop offset="100%" stopColor="#ffb347" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="16" fill="#0f1325" />
    <path
      d="M32 12L50 52H42.5L38.8 43H25.2L21.5 52H14L32 12Z"
      fill="url(#logoGradient)"
    />
    <path d="M28.3 34H35.7L32 25.2L28.3 34Z" fill="#0b0d16" />
  </svg>
);

export default Logo;
