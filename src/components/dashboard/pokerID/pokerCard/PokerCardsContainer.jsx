import React, { useState, useEffect, useContext } from "react";
import styles from "./PokerCardsContainer.module.css"; // Make sure to import your CSS file
import PokerCard from "./pokerCard";
import { userAccountIdsInfo } from "../../../../servicefile/pokeridservice";
import { UserContext } from "../../../../App";

const PokerCardsContainer = ({ getInfos, setGetInfos }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [AllIDs, setAllIds] = useState([]);
  const [tabSelected, setTabSelected] = useState([]);
  const { userData } = useContext(UserContext);

  const getTagIdInfo = async () => {
    if (!userData || !userData._id) return;

    const res = await userAccountIdsInfo(userData._id);
    setAllIds(res);
    setTabSelected(res);
    setGetInfos(false);
  };

  useEffect(() => {
    getTagIdInfo();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (getInfos === true) {
      getTagIdInfo();
    }
    // eslint-disable-next-line
  }, [getInfos]);

  const setTab = (val) => {
    if (val === 1) {
      setTabSelected([...AllIDs]);
    } else if (val === 2) {
      let currentTabs = AllIDs.filter((item) => item.status === "Approved");
      setTabSelected([...currentTabs]);
    } else if (val === 3) {
      let currentTabs = AllIDs.filter((item) => item.status === "Pending");
      setTabSelected([...currentTabs]);
    } else {
      let currentTabs = AllIDs.filter((item) => item.status === "Aborted");
      setTabSelected([...currentTabs]);
    }
    setActiveTab(val);
  };

  // Check if the number of cards exceeds 6
  const isScrollable = tabSelected.length > 6;

  return (
    <div className={styles.PokerCardsContainer}>
      <div className={styles.TabContent}>
        <div className={styles.TabFilters}>
          <div
            className={styles.TabButton}
            style={
              activeTab === 1 ? { borderBottom: "0.125rem #002366 solid" } : {}
            }
          >
            <button
              className={styles.TabText}
              style={activeTab === 1 ? { color: "#002366" } : {}}
              onClick={() => setTab(1)}
            >
              View all
            </button>
          </div>
          <div
            className={styles.TabButton}
            style={
              activeTab === 2 ? { borderBottom: "0.125rem #002366 solid" } : {}
            }
          >
            <button
              className={styles.TabText}
              style={activeTab === 2 ? { color: "#002366" } : {}}
              onClick={() => setTab(2)}
            >
              Successful
            </button>
          </div>
          <div
            className={styles.TabButton}
            style={
              activeTab === 3 ? { borderBottom: "0.125rem #002366 solid" } : {}
            }
          >
            <button
              className={styles.TabText}
              style={activeTab === 3 ? { color: "#002366" } : {}}
              onClick={() => setTab(3)}
            >
              Pending
            </button>
          </div>
          <div
            className={styles.TabButton}
            style={
              activeTab === 4 ? { borderBottom: "0.125rem #002366 solid" } : {}
            }
          >
            <button
              className={styles.TabText}
              style={activeTab === 4 ? { color: "#002366" } : {}}
              onClick={() => setTab(4)}
            >
              Aborted
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${styles.CardsContent} ${
          tabSelected.length > 6 ? styles.scrollable : ""
        }`}
      >
        <div className={styles.CardsRow}>
          {tabSelected &&
            tabSelected.length > 0 &&
            tabSelected.map((item, index) => (
              <div className={styles.CardItem} key={index}>
                <PokerCard
                  status={item.status}
                  color={item.status}
                  item={item}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PokerCardsContainer;
