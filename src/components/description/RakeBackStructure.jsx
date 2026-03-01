import React from "react";
import styles from "./rakeback_structure.module.css";

const RakeBackStructure = () => {
	const LoyalityProgram = [{
		line1: "Minimum requirements for minimum rake have increased - now you need to earn at least 10,000 rubles  (previously 5,000 rubles)",
line2: "You can get up to 70% cashback maximum (was 67%)",
line3:"Next month's cashback bonuses have changed",
line4:"On average, cashback has become either 1-2% more or 5-7% less (depending on levels)"
	  }];
	  
	  const transformedProgram = LoyalityProgram.map(item => item.text);
	  
	  console.log(transformedProgram);
	  const data = [
		{ limit: '0.05/0.1 RUB', player2: '5 RUB', player3to4: '5 RUB', player5plus:'5 RUB'},
		{ limit: '0.1/0.25 RUB', player2: '10 RUB', player3to4: '10 RUB', player5plus:'10 RUB' },
		{ limit: '0.25/0.5 RUB', player2: '20 RUB', player3to4: '20 RUB' , player5plus:'20 RUB'},
		{ limit: '0.5/1 RUBs', player2: '30 RUB', player3to4: '30 RUB', player5plus:'30 RUB'},
		{ limit: '1/2 RUB', player2: '40 RUB', player3to4: '40 RUB', player5plus:'40 RUB'},
		{ limit: '2.5/5 RUB', player2: '50 RUB', player3to4: '75 RUB', player5plus:'125 RUB' },
		{ limit: '5/10 RUB', player2: '50 RUB', player3to4: '75 RUB', player5plus:'125 RUB'},
		{ limit: '10/20 RUB', player2: '75 RUB', player3to4: '100 RUB' , player5plus:'150 RUB'},
		{ limit: '15/30 RUB', player2: '75 RUB', player3to4: '100 RUB' , player5plus:'150 RUB'},  
		{ limit: '25/50 RUB', player2: '100 RUB', player3to4: '150 RUB' , player5plus:'200 RUB'},  
		{ limit: '50/100 RUB', player2: '100 RUB', player3to4: '150 RUB' , player5plus:'200 RUB'},  
		{ limit: '75/150 RUB', player2: '125 RUB', player3to4: '175 RUB' , player5plus:'250 RUB'},  
		{ limit: '100/200 RUB', player2: '125 RUB', player3to4: '175 RUB' , player5plus:'250 RUB'},  
		{ limit: '150/300 RUB', player2: '150 RUB', player3to4: '225 RUB' , player5plus:'300 RUB'},  
		{ limit: '250/500 RUB', player2: '150 RUB', player3to4: '225 RUB' , player5plus:'300 RUB'},  
		{ limit: '500/1000 RUB', player2: '200 RUB', player3to4: '300 RUB' , player5plus:'400 RUB'},  
		{ limit: '750/1500 RUB', player2: '200 RUB', player3to4: '300 RUB' , player5plus:'400 RUB'},  
		{ limit: '1000/2000 RUB', player2: '250 RUB', player3to4: '350 RUB' , player5plus:'500 RUB' ,},  
    {currency: 'Tables with currency tenge (KZT)', pokerCurrencyAmt:'1 000 KZT',},
{pokerName:'Chinese Shopping',pokerAmt:'1,500 RUB'},

	];

	return (
		<div id="rack-structure"  >
		<div class={styles.divider}>
    <div class={styles.diamond}></div>
  </div>
	<div >
	<font className={styles.container_heading}>Rake to Pokerdom</font></div><div class={styles.divider}>
    <div class={styles.diamond}></div>
  </div>
    <div >
    <p className={styles.loyality__para} >
    Pokerdom takes $0.01 ruble rake for every 0.20 rubles in the pot, which actually means 5% rake. Depending on the limit and the number of players at the table, the rake cap will vary, which is detailed in the table below.
</p>
<p className={styles.loyality__para}>
In Chinese shopping, the rake is taken once, after a full round of hands has been dealt.
</p>
    </div>
									<div>
									<table className={styles.table_container}>
  <tr>
    <th className={styles.table_head}>Limit</th>
    <th className={styles.table_head}>2 players</th>
    <th className={styles.table_head}>3-4 players</th>
    <th className={styles.table_head}>5+ players</th>


  </tr>
  {data.map((item) => (
<tr>
    <td className={styles.table_data}>{item.limit} {item.currency}{item.pokerName}</td>
    <td className={styles.table_data_points}>{item.player2}</td>
    <td className={styles.table_data}>{item.player3to4}{item.shopping}{item.pokerCurrencyAmt}{item.pokerAmt}</td>
    <td className={styles.table_data}>{item.player5plus}
     
    </td>
   


</tr>
 
  ))}
</table>
</div>
<div>
<div class={styles.divider}>
    <div class={styles.diamond}></div>
  </div>
<div>
<font  className={styles.container_heading2}>Rake on Pokerdom</font></div>
<div class={styles.divider}>
    <div class={styles.diamond}></div>
  </div>
</div>
<div>
    <p className={styles.loyality__para}>
    Let's consider all options for receiving additional cashback in the room, in addition to participating in the loyalty program. 
    </p>
    <li className={styles.loyality__para}>
    You can receive cashback at Pokerdom in several ways:
    </li>
    <li className={styles.loyality__para}>
    Advancing through the levels of the “Time Machine” loyalty program, depending on the rake you accumulate, will allow you to receive up to 70% cashback. 
    </li>
    <li className={styles.loyality__para}>
    Separately, there are promotions and rake races, which can also bring additional profit. 
    </li>
    <p className={styles.loyality__para}>
    Please note that when choosing between the loyalty programs “100 Steps to a Million” and “Time Machine”, it is worth evaluating your game volume in order to choose the most rewards option. 
     </p>
     <p className={styles.loyality__para}>
     For real grinders who are ready to play a lot and regularly, it is more rewards to choose "Time Machine", while for small volumes of playing it is better to give preference to the "100 steps to a million" program. 
      </p>
</div>
<div class={styles.divider}>
    <div class={styles.diamond}></div>
  </div>
<div>
    <font  className={styles.container_heading2}>
    Conditions for receiving bonuses on Pokerdom
    </font>
</div>
<div class={styles.divider}>
    <div class={styles.diamond}></div>
  </div>
<div>
    <p  className={styles.loyality__para}>
    Some promotions are available to players only once, while some offers can be repeated – such as jackpots, reload bonuses, and so on. 
    </p>
    <p  className={styles.loyality__para}>
    The following conditions apply when receiving a deposit bonus:
    </p>
    <li  className={styles.loyality__para}>
    The promotion is available to the player only once.
    </li>
    <li  className={styles.loyality__para}>
    It is important that the deposit corresponds to the minimum and maximum deposit limits within the bonus offer
    </li>
<li  className={styles.loyality__para}>
It is not possible for two or more players who registered in the room from one device to register and receive a bonus.
</li>
<p  className={styles.loyality__para}>
The money is credited to the bonus balance and will be converted into real money only as it is wagered.
</p>
</div>

</div>
   		
            
	);
};

export default RakeBackStructure;

