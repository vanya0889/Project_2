import React from "react";
import styles from './ThisDayInfo.module.css'
import {IndicatorSvgSelector} from "../../../../assets/icons/IndicatorSvgSelector";

export const ThisDayItem = ({item}) => {
  const {icon_id, name, value} = item



  return (
	<div className={styles.item}>
	  <div className={styles.indicator}><IndicatorSvgSelector id={icon_id}/></div>
	  <div className={styles.indicator_name}>{name}</div>
	  <div className={styles.indicator_value}>{value}</div>
	</div>
  )
}