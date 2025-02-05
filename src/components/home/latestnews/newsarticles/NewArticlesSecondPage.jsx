import React from "react";
import styles from "./NewsArticlesSecondPage.css"; // Adjust the path if necessary

function NewsArticlesSecondPage() {
  return (
    <div className={styles.main_container}>
      <main>
        {/* Table of Contents Section */}
        <aside className={styles.table_of_contents}>
          <h2>Table of Contents</h2>
          <ul>
            <li>
              <a href="#wyoming-bill">List of top online poker sites in Texas</a>
            </li>
            <li>
              <a href="#wyoming-2025">How to play poker online in Texas: step-by-step guide</a>
            </li>
            <li>
              <a href="#indiana-act">Real money online poker in Texas</a>
            </li>
            <li>
              <a href="#indiana-2025">Is online poker legal in Texas?</a>
            </li>
          </ul>
        </aside>

        {/* Law Details Section */}
        <section className={styles.law_details}>
          <section id="wyoming-bill" className={styles.law}>
            <h2>List of top online poker sites in Texas</h2>
            <p>
              Strict limitations make the establishment of Internet poker sites
              in The Lone Star State impossible. At the moment, Texans can play
              for real money in offshore online poker rooms. Also, there is an
              option for sweepstakes sites, where you play using special tokens
              and then exchange them for real money.
            </p>
            <p>
              When it comes to offshore poker sites, their variety may be
              confusing. An unreliable website may simply shut down and take
              your deposit with it. So, to make it much easier, we created a
              list of the best poker sites for you to try!
            </p>
          </section>

          <section id="wyoming-2025" className={styles.law}>
            <h3>How to play poker online in Texas: step-by-step guide</h3>
            <p>
              Whether you are a seasoned player or a newcomer, consider the
              guide below on how to start playing online poker right away.
            </p>
            <ol>
              <li>Choose the platform that accepts players from Texas and visit its official website.</li>
              <li>Pass the registration procedure and become an active user.</li>
              <li>Follow the link to get the poker client and install it on your device.</li>
              <li>Complete the ID verification to access a withdrawal option. It is better to do it even before making the first deposit.</li>
              <li>Make a deposit and start playing.</li>
            </ol>
            <p>
              Important! It is crucial to play wisely, with careful bankroll
              management and regular self-testing. Do not neglect to ask for
              help if you suspect the first signs of gambling addiction.
            </p>
          </section>

          <section id="indiana-act" className={styles.law}>
            <h2>Real money online poker in Texas</h2>
            <p>
              Online poker in Texas operates in a unique legal environment
              compared to states like Nevada or New Jersey, where this game is
              regulated. Current realities, for example, the opposition to
              online gambling as a whole on the side of influential figures,
              almost all bills to legalize poker have failed in the last sessions.
            </p>
          </section>

          <section id="indiana-2025" className={styles.law}>
            <h2>Is online poker legal in Texas?</h2>
            <p>
              Currently, online poker is illegal in Texas due to the norms
              within Texas Penal Code §47.01(1). This section of the law
              describes gambling as an activity where people can bet on the
              partial (final) outcome of a game, the performance of a game
              participant, or a competition.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}

export default NewsArticlesSecondPage;
