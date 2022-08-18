import React from "react";
import styles from "./Days.module.css"


export const Tabs = () => {
  const tabs = [
	{
	  value: "На неделю"
	},
	{
	  value: "На 10 дней"
	},
	{
	  value: "На месяц"
	}
  ]

  return (
	<div className={styles.tabs}>
	  <div className={styles.tabs_wrapper}>
		{
		  tabs.map((tab) => (
			<div className={styles.tab} key={tab.value}>{tab.value}</div>
		  ))
		}
	  </div>
	  <div className={styles.cancel}>Отменить</div>
	</div>
  )
}