import React from 'react';
import styles from './ThisDay.module.css'
import sun from '../../../../assets/icons/sun.png'





export const ThisDay = () => {

  return (
    <div className={styles.this_day}>
		<div className={styles.top_block}>
		  <div className={styles.top_wrapper}>
			<div className={styles.temperature}>20°</div>
			<div className={styles.day}>Сегодня</div>
		  </div>
			<div >
			  <img className={styles.icon}  src={sun} alt=""/>
			</div>
		</div>
	  <div className={styles.bottom_block}>
		<div className={styles.time}>
		  Время <span>21:40</span>
		</div>
		<div className={styles.city}>Москва</div>
	  </div>
	</div>
  )

}