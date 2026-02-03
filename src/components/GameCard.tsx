import { Game } from '../content/siteContent';
import Badge from './Badge';
import { Button, ButtonLink } from './Button';
import styles from './GameCard.module.css';

const statusToneMap = {
  Released: 'success',
  'In Development': 'info',
  Prototype: 'warning'
} as const;

interface GameCardProps {
  game: Game;
  onDetails: (game: Game) => void;
}

const StoreButton = ({ label, href }: { label: string; href?: string }) => {
  if (href) {
    return (
      <ButtonLink
        className={styles.storeButton}
        variant="secondary"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </ButtonLink>
    );
  }

  return (
    <span className={styles.tooltip} data-tooltip="Coming soon">
      <button className={`${styles.storeButton} ${styles.disabledButton}`} type="button" disabled>
        {label}
      </button>
    </span>
  );
};

const GameCard = ({ game, onDetails }: GameCardProps) => (
  <article className={styles.card}>
    <div className={styles.cover}>
      <img src={game.coverImage} alt={`${game.title} cover art`} loading="lazy" width={640} height={360} />
      <div className={styles.status}>
        <Badge label={game.status} tone={statusToneMap[game.status]} />
      </div>
    </div>
    <div className={styles.body}>
      <div className={styles.header}>
        <h3>{game.title}</h3>
        <div className={styles.platforms}>
          {game.platforms.map((platform) => (
            <Badge key={platform} label={platform} />
          ))}
        </div>
      </div>
      <p>{game.description}</p>
      <div className={styles.actions}>
        <StoreButton label="Google Play" href={game.storeLinks.googlePlay} />
        <StoreButton label="App Store" href={game.storeLinks.appStore} />
        <Button variant="ghost" onClick={() => onDetails(game)}>
          Details
        </Button>
      </div>
    </div>
  </article>
);

export default GameCard;
