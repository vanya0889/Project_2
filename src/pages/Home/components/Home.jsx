import React from 'react';
import styles from './Home.module.css'
import {ThisDay} from "./ThisDay/ThisDay";
import {ThisDayInfo} from "./ThisDayInfo/ThisDayInfo";



export const Home = () => {
  return (
    <div className={styles.home}>
	  <div className={styles.wrapper}>
		<ThisDay />
		<ThisDayInfo />
	  </div>
	</div>
  )
}