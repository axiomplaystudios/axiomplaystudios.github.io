import { useState } from 'react';
import { siteContent, Game } from '../content/siteContent';
import GameCard from '../components/GameCard';
import Modal from '../components/Modal';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import styles from './GamesSection.module.css';
import { ButtonLink } from '../components/Button';

const GamesSection = () => {
  const [activeGame, setActiveGame] = useState<Game | null>(null);

  return (
    <section id="games" className="section">
      <div className="container">
        <SectionHeader title={siteContent.games.title} subtitle={siteContent.games.subtitle} />
        <div className={styles.grid}>
          {siteContent.games.list.map((game, index) => (
            <Reveal key={game.id} delay={index * 100}>
              <GameCard game={game} onDetails={setActiveGame} />
            </Reveal>
          ))}
        </div>
      </div>
      <Modal
        open={Boolean(activeGame)}
        title={activeGame?.title ?? ''}
        onClose={() => setActiveGame(null)}
      >
        {activeGame && (
          <div className={styles.modalContent}>
            <p>{activeGame.details.summary}</p>
            <ul>
              {activeGame.details.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className={styles.modalActions}>
              {activeGame.storeLinks.googlePlay && (
                <ButtonLink
                  href={activeGame.storeLinks.googlePlay}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                >
                  Google Play
                </ButtonLink>
              )}
              {activeGame.storeLinks.appStore && (
                <ButtonLink
                  href={activeGame.storeLinks.appStore}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                >
                  App Store
                </ButtonLink>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default GamesSection;
