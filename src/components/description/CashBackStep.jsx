import React from "react";
import styles from "./cashback_step.module.css";

const CaskBackStep = () => {
	const LoyalityProgram = [{
		text: "The first loyalty program that will be launched on Pokerdom on October 5 is '100 Steps to a Million'. According to the terms of this program, every ruble of rake generated in any of the shopping disciplines (cash games, MTT, windfalls, and SnG) will bring 1 bonus point. When a certain number of points are collected, the player's level will increase, and along with the increase in level, the player will receive an instant random cash prize. To receive the prize, the player will be offered a choice of several cards 'face down', under each of which there will be a prize, which will fall out with a predetermined probability."
	  }];
	  
	  const transformedProgram = LoyalityProgram.map(item => item.text);
	  
	  console.log(transformedProgram);
	  const data = [
		{ id: '1-5', points: '500', topPrize: '1,000 rubles', priceCata1: '150 rubles',priceCata2:'50 rubles',priceCata3:'25 rubles' },
		{ id: '5-10', points: '1,000', topPrize: '2,100 rubles', priceCata1: '300 rubles',priceCata2:'125 rubles',priceCata3:'55 rubles' },
		{ id: '11-20', points: '1,750', topPrize: '4,320 rubles', priceCata1: '700 rubles',priceCata2:'230 rubles',priceCata3:'115 rubles' },
		{ id: '21-30', points: '2500', topPrize: '7,350 rubles', priceCata1: '1,100 rubles',priceCata2:'350 rubles',priceCata3:'190 rubles' },
		{ id: '31-40', points: '5000', topPrize: '16,000 rubles', priceCata1: '2,400 rubles',priceCata2:'800 rubles',priceCata3:'400 rubles' },
		{ id: '41-50', points: '7500', topPrize: '22,350 rubles', priceCata1: '4,000 rubles',priceCata2:'1,400 rubles',priceCata3:'650 rubles' },
		{ id: '51-60', points: '10,000', topPrize: '35,000 rubles', priceCata1: '5,900 rubles',priceCata2:'1,900 rubles',priceCata3:'1,000 rubles' },
		{ id: '61-70', points: '12,500', topPrize: '50,000 rubles', priceCata1: '7,100 rubles',priceCata2:'2,500 rubles',priceCata3:'1,400 rubles' },
		{ id: '71-80', points: '15,000', topPrize: '65,000 rubles', priceCata1: '10,000 rubles',priceCata2:'3,150 rubles',priceCata3:'1,800 rubles' },
		{ id: '81-90', points: '20,000', topPrize: '100,000 rubles', priceCata1: '15,000 rubles',priceCata2:'4,550 rubles',priceCata3:'2,300 rubles' },
		{ id: '91-99', points: '25,000', topPrize: '125,000 rubles', priceCata1: '20,000 rubles',priceCata2:'6,200 rubles',priceCata3:'3,100 rubles' },
		{ id: '100', points: '25,000', topPrize: '1,000,000 rubles', priceCata1: '150,000 rubles',priceCata2:'50,000 rubles',priceCata3:'25,000 rubles' },
	  
	];

	return (
		<div id="cashback-step"  >
			<div class={styles.divider}>
    <div class={styles.diamond}></div>
  </div>
	<div >
	<font className={styles.container_heading} >Loyalty program "100 steps to a million"</font></div>
	<div class={styles.divider}>
    <div class={styles.diamond}></div>
  </div>
	<div className={styles.loyality__para}>{LoyalityProgram.map((list, index) => (
									<div key={index}>
										<div className={styles.text}>{list.text}</div>
									</div>
								))} </div>
								<div className=
								{styles.loyality__table_heading}>
									<p>The name “100 Steps to a Million” refers to the one hundred bonus levels that users can reach. Below you can see the cash rewards that will be available to players:

</p>
								</div>
								<div>
									<div>
									<table className={styles.table_container}>
  <tr>
    <th className={styles.table_head}>Level</th>
    <th className={styles.table_head}>Points</th>
    <th className={styles.table_head}>Top prize probability 1%</th>
    <th className={styles.table_head}>Prize 1 category probability 3%</th>
    <th className={styles.table_head}>Prize 2 category probability 46%</th>
    <th className={styles.table_head}>Prize category 3 probability 50%</th>

  </tr>
  {data.map((item) => (
<tr>
    <td className={styles.table_data}>{item.id}</td>
    <td className={styles.table_data_points}>{item.points}</td>
    <td className={styles.table_data}>{item.topPrize}</td>
    <td className={styles.table_data}>{item.priceCata1}</td>
    <td className={styles.table_data}>{item.priceCata2}</td>
    <td className={styles.table_data}>{item.priceCata3}</td>
</tr>
 
  ))}
</table>
</div>
<div>
	<p className={styles.loyality__para}>
	Players who reach level 100 will continue to receive a fixed cashback of 25% (RUB 250 for every 1,000 bonus points) until the end of the 100 Steps to a Million program.
	</p>
	<p className={styles.loyality__para}>
	Some cash tables and tournaments may be marked in the lobby with a special "Accelerated Points" mark. Bonus points for such tables will be awarded using an increasing coefficient.
	</p>
</div>
</div>
</div>
   		
            
	);
};

export default CaskBackStep;

