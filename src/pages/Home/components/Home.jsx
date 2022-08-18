import React from 'react';
import styles from './Home.module.css'
import {ThisDay} from "./ThisDay/ThisDay";
import {ThisDayInfo} from "./ThisDayInfo/ThisDayInfo";
import {Days} from "./Days/Days";



export const Home = () => {
  return (
    <div className={styles.home}>
	  <div className={styles.wrapper}>
		<ThisDay />
		<ThisDayInfo />

	  </div>
	  <Days/>

	</div>
  )
}