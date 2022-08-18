import React from "react";
import styles from "./Days.module.css"
import {GlobalSvgSelector} from "../../../../assets/icons/GlobalSvgSelector";


export const Card = ({day}) => {
  const {day_id, day_info, icon_id, temp_day, temp_night, info} = day


  return (
	<div className={styles.card}>
	  <div className={styles.day}>{day_id}</div>
	  <div className={styles.day_info}>{day_info}</div>
	  <div className={styles.icon}>
		<GlobalSvgSelector id={icon_id}/>
	  </div>
	  <div className={styles.temp_day}>{temp_day}</div>
	  <div className={styles.temp_night}>{temp_night}</div>
	  <div className={styles.info}>{info}</div>
	</div>
  )
}