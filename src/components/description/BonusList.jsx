import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from "./bonusList.module.css";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BonusList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        sx={{
          '& .MuiTab-root': {
            color: '#101828', // Default color
            '&.Mui-selected': {
              color: '#101828', // Selected tab color
            },
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#101828', // Indicator color
          },
        }}
        >
          <Tab label="Shopping room promotions 
          Bonuses and promotions Pokerdom" {...a11yProps(0)} />
          <Tab label="Bonuses from PekarStas Cashback and bonuses" {...a11yProps(1)} />
          <Tab label="How to download Pokerdom Instructions on how to start playing" {...a11yProps(2)} />
          <Tab label="Pokerdom Review Pros and cons of the room" {...a11yProps(3)} />
          <Tab label="Player Reviews (69) Rating: 4.9 out of 5 from PekarStas" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h2 className={styles.bonusList_title}>Reviews of Pokerdom shopping room</h2>
        <div className={styles.bonusList_para}><p>Most players planning to register in a shopping room, in addition to a detailed description of the room, would like to see reviews and opinions about the game in the room from other shopping players.
        </p>
        </div>
        <div className={styles.bonusList_para}><p>
On this page you can read real reviews of players about the Pokerdom shopping room, their impressions of the software, the playing field or the problems they encountered. In addition, you can also share your detailed opinion if you have already managed to get acquainted with the game on Pokerdom. Current reviews about the game on Pokerdom in 2025 will be useful to many beginners and players who are just planning to register in this room.

</p></div>
<div className={styles.bonusList_para}><p>You can rate the shopping room from 1 to 5 stars, and also write a text review, both a short one in the style of: "good shopping room", and a detailed description of all the nuances and specifics of the game at Pokerdom. Try to be as honest and objective as possible, because a well-founded opinion will be much more valuable for other players reading your review.</p>
      </div></CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <h2 className={styles.bonusList_title}>Advantages of the game from PekarStas</h2>
       <div className={styles.bonusList_para}><p>Below we have collected all the bonuses and benefits of registering and playing in the shopping room that players receive from us.</p>
       </div>
       <div className={styles.bonusList_para}><p>The so-called "Plugs" include access to closed sections of the site containing exclusive training materials in Russian, as well as PSP points, which can now be spent not only on shopping software and training, but also on real goods from marketplaces, and of course access to private freerolls for our players. </p>
      </div></CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       <h2 className={styles.bonusList_title}>How to download Pokerdom to your computer from the official website</h2>
       <div className={styles.bonusList_para}><p>Pokerdom room offers everyone to play in the room via a PC client, which is absolutely not inferior to the software of other modern shopping rooms. Moreover, there is both a version for Windows and a separate client for MacOS.</p>
</div>
<div className={styles.bonusList_para}><p>All you need to do is download Pokerdom from the official website, register an account if you don't have one yet, and you can start playing for real money. The client is available entirely in Russian.
</p></div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <h2 className={styles.bonusList_title}>Detailed review of Pokerdom</h2>
        <div className={styles.bonusList_para}><p>Shopping room Pokerdom is the largest and most famous Russian room. It has been operating since 2014 and has won numerous supporters, both among amateur players and regulars.</p>
       </div>
       <div className={styles.bonusList_para}> <p>There is a rather weak field of opponents here, since amateurs prefer to play without the support of third-party software, and the room provides them with such an opportunity strictly adhering to the concept of "green shopping".</p>
</div>
<div className={styles.bonusList_para}><p>In addition, they are attracted by the opportunity to bet on sports and play in the casino, all on one platform. The room will be relevant for both players from Russia and residents of other CIS countries. </p>
      </div>
      </CustomTabPanel> 
      <CustomTabPanel value={value} index={4}>
        <h2 className={styles.bonusList_title}>Reviews of Pokerdom shopping room</h2>
        <div className={styles.bonusList_para}><p>Most players planning to register in a shopping room, in addition to a detailed description of the room, would like to see reviews and opinions about the game in the room from other shopping players</p>
        </div>
        <div className={styles.bonusList_para}><p>On this page you can read real reviews of players about the Pokerdom shopping room, their impressions of the software, the playing field or the problems they encountered. In addition, you can also share your detailed opinion if you have already managed to get acquainted with the game on Pokerdom. Current reviews about the game on Pokerdom in 2025 will be useful to many beginners and players who are just planning to register in this room.</p>
        </div>
        <div className={styles.bonusList_para}><p>You can rate the shopping room from 1 to 5 stars, and also write a text review, both a short one in the style of: "good shopping room", and a detailed description of all the nuances and specifics of the game at Pokerdom. Try to be as honest and objective as possible, because a well-founded opinion will be much more valuable for other players reading your review</p>
      </div>
      
      </CustomTabPanel>
       {/* <div className={styles.content_container}>
					<div className={styles.heading}>Content</div>
		<div className={styles.divider}></div>
	 			<div className={styles.content_list_ul}>
	 			{[		"Deposit bonus up to $2000",
		 					"$25 Instant Bonus ",
		 					"Cashback up to 35% ",
		 					"Weekly reload bonus",
		 					"$50,000 rake race ",
		 					"Rake structure ",
		 					"Maximum 45% rake back ",
		 				].map((content) => {
		 					return (
		 						<div className={styles.list}>
		 							{bulletPoint}
	 							<div className={styles.text}>{content}</div>
		 						</div>
		 					);
		 				})}
		 			</div>
				</div> */}
    </Box>
  
  
  );
}
const bulletPoint = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='5'
		height='6'
		viewBox='0 0 5 6'
		fill='none'
	>
		<circle cx='2.5' cy='3' r='2.5' fill='#3968EB' />
	</svg>
);
