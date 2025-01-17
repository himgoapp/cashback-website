import React from "react";
import styles from "./cash_back_time_machine.module.css";

const CashBackTimeMachine = () => {
	const LoyalityProgram = [{
		line1: "Minimum requirements for minimum rake have increased - now you need to earn at least 10,000 rubles  (previously 5,000 rubles)",
line2: "You can get up to 70% rakeback maximum (was 67%)",
line3:"Next month's rakeback bonuses have changed",
line4:"On average, rakeback has become either 1-2% more or 5-7% less (depending on levels)"
	  }];
	  
	  const transformedProgram = LoyalityProgram.map(item => item.text);
	  
	  console.log(transformedProgram);
	  const data = [
		{ rakeAmtPerMnth: 'Up to 10,000 rubles', rakePerMonth: '-', addRake: '-'},
		{ rakeAmtPerMnth: '10,001–25,000 rubles', rakePerMonth: '12%', addRake: '+4%' },
		{ rakeAmtPerMnth: '25,001–75,000 rubles', rakePerMonth: '16%', addRake: '+6%' },
		{ rakeAmtPerMnth: '75,001–150,000 rubles', rakePerMonth: '20%', addRake: '+8%'},
		{ rakeAmtPerMnth: '150,001–350,000 rubles', rakePerMonth: '25%', addRake: '+10%'},
		{ rakeAmtPerMnth: '350,001–750,000 rubles', rakePerMonth: '30%', addRake: '+13%' },
		{ rakeAmtPerMnth: '750,000–1,250,000 rubles', rakePerMonth: '35%', addRake: '+16%'},
		{ rakeAmtPerMnth: '1,250,001–1,750,000 rubles', rakePerMonth: '40%', addRake: '+20%' },
		{ rakeAmtPerMnth: 'More than 1,750,001 rubles', rakePerMonth: '45%', addRake: '+25%' },  
	];

	return (
		<div id="caskback-time-machine"  >
		
	<div className={styles.container_heading}>
	<h1 >Loyalty program "Time Machine" on Pokerdom - rakeback up to 70%</h1></div>
    <div className={styles.loyality__para}>
    <p >From November 1, 2023, the Pokerdom room changed the terms of its loyalty program "Time Machine". The main thing that has changed:

</p>
    </div>
	<div className={styles.loyality__para}>
   
        {LoyalityProgram.map((list, index) => (
									<div key={index} >
										<li>{list.line1}</li>
                                        <li>{list.line2}</li>
                                        <li>{list.line3}</li>
                                        <li>{list.line4}</li>
									</div>
								))} </div>
							
								<div className={styles.loyality__para}>
                                    <p>
                                    You can read the new terms of the “Time Machine” loyalty program in the table below, where all payments at each level will be indicated (recall that rakeback under the loyalty program is credited to the player’s account on the 1st of each month):
                                    </p>
                                </div>
									<div>
									<table className={styles.table_container}>
  <tr>
    <th className={styles.table_head}>Rake amount per month</th>
    <th className={styles.table_head}>Rakeback per month</th>
    <th className={styles.table_head}>Additional rakeback</th>

  </tr>
  {data.map((item) => (
<tr>
    <td className={styles.table_data}>{item.rakeAmtPerMnth}</td>
    <td className={styles.table_data_points}>{item.rakePerMonth}</td>
    <td className={styles.table_data}>{item.addRake}</td>

</tr>
 
  ))}
</table>
</div>
<div className={styles.loyality__para}>
    <span className={styles.example}>Example:</span><span >  in November, a player generated 100,000 rubles in rake. On December 1, he will receive  a direct rakeback of 20,000 rubles  (equal to 20%) to his account , and this player's rakeback in November  (regardless of the final amount)  will be increased by 8%. Then, during December, this same player generated 80,000 rubles in rake. On December 1, he will receive  a direct rakeback of 16,000 rubles  (equal to 20%)  to his account and  an additional rakeback of 6,400 rubles  (equal to 8%) </span>
</div>
<div >
<h2 className={styles.container_heading2}>Loyalty program "Time Machine" on Pokerdom - rakeback up to 70%</h2></div>
<div >
	<p className={styles.loyality__para}>
	The possibility of winning the jackpot can be considered as one of the additional bonuses. 
	</p>
	<p className={styles.loyality__para}>
	There are only 2 ways to hit the jackpot at Pokerdom:
	</p>
	<li className={styles.loyality__para}>
	Jackpot in Windfall tournaments
	</li>
	<li className={styles.loyality__para}>
	Bad Beat Jackpot at Cash Tables
	</li>
	<p className={styles.loyality__para}>
	Let's now talk about each of them in more detail to understand how they work and what needs to be done to win them. 
	</p>
</div>
<div>
	<h2 className={styles.container_heading2}>
	Bad beat jackpot on Pokerdom – what is it

	</h2>
</div>
<div>
	<p className={styles.loyality__para}>
	At cash tables, which are marked with a special sign – Jackpot, you can win a cash prize when you lose any of the hands with a strong combination. For Texas Hold'em, this is a combination of at least a quad of eights. For Omaha, this is a quad of aces and higher combinations.
	</p>
	<p className={styles.loyality__para}>
	The Bad Beat Jackpot amount is divided between the winner (20%) and the loser (30%) in the hand, as well as all players who were at other Jackpot tables at the time of the draw - they are entitled to 10%.
	</p>
</div>
<div>
	<h2 className={styles.container_heading2}>
	Jackpot in Windfall tournaments

	</h2>
</div>
<div>
	<p className={styles.loyality__para}>
	In this format of small tournaments, the prize pool is formed randomly. Moreover, the jackpot can be won with a probability of 2 in 100,000.
	</p>

</div>
</div>
   		
            
	);
};

export default CashBackTimeMachine;

