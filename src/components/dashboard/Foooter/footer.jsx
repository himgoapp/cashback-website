import React from "react";

const DashboardFooter = () => {
  return (
    <div class="floating-mobile-menu">
      <div class="floating-mobile-menu__inner-wrapper">
        <div class="container">
          <nav
            class="floating-mobile-menu__nav"
            aria-label="Mobile menu with bonus and links"
          >
            <ul class="floating-mobile-menu__list">
              <li>
                <a
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  aria-label="Dashboard"
                  href="/dashboard"
                >
                  <span class="icon-font icon-news" aria-hidden="true"></span>{" "}
                  Dashboard
                </a>
              </li>

              <li>
                <a
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  aria-label="Rooms"
                  href="/dashboard/pokerid"
                >
                  <span class="icon-font icon-rooms" aria-hidden="true"></span>{" "}
                  Poker IDs
                </a>
              </li>
              <li>
                <a
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  aria-label="Casino"
                  href="/dashboard/deals"
                >
                  <span class="icon-font icon-casino" aria-hidden="true"></span>{" "}
                  Deals
                </a>
              </li>

              <li>
                <a
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  aria-label="Casino"
                  href="/latest-news"
                >
                  <span class="icon-font icon-casino" aria-hidden="true"></span>{" "}
                  Blogs
                </a>
              </li>

              <li>
                <a
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  aria-label="Rules"
                  href="/poker-rules"
                >
                  <span class="icon-font icon-learn" aria-hidden="true"></span>{" "}
                  More
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="floating-mobile-menu__bonuses">
          <div class="container">
            <div class="floating-mobile-menu__bonuses-sub-menu">
              <p> 1WIN POKER ROOM ACTIVE BONUSES:</p>
              <div class="floating-mobile-menu__bonuses-button">
                <ul class="floating-mobile-menu__list-bonuses">
                  <li class="floating-mobile-menu__bonuses-item">
                    <span class="floating-mobile-menu__bonuses-icon">
                      <span class="icon-font icon-rakeback"></span>
                    </span>
                    <span class="floating-mobile-menu__bonus-name">
                      Up to 50%
                    </span>
                  </li>
                  <li class="floating-mobile-menu__bonuses-item">
                    <span class="floating-mobile-menu__bonuses-icon">
                      <span class="icon-font icon-welcome"></span>
                    </span>
                    <span class="floating-mobile-menu__bonus-name">
                      50% Rakeback{" "}
                    </span>
                  </li>
                </ul>
                <button class="floating-mobile-menu__button-bonus button button__with-bg">
                  <span class="button__text">Activate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;
