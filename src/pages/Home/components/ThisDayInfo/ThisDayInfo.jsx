import React from "react";
import styles from "./ThisDayInfo.module.css"
import cloud from "../../../../assets/images/cloud.png"
import {ThisDayItem} from "./ThisDayItem";


export const ThisDayInfo = () => {

  const items = [
	{
	  icon_id: "temp",
	  name: "Давление",
	  value: "20° - ощущается как 17°"
	},

	{
	  icon_id: "pressure",
	  name: "Температура",
	  value: "765 мм ртутного столба - нормальное"
	},

	{
	  icon_id: "precipitation",
	  name: "Осадки",
	  value: "Без осадков"
	},

	{
	  icon_id: "wind",
	  name: "Ветер",
	  value: "3 м/с юго-запад - легкий ветер"
	}

  ]


  return (
	<div className={styles.this_dayInfo}>
	  <div className={styles.itemsContainer}>
		{
		  items.map((item) => (
		    <ThisDayItem key={item.icon_id} item={item}/>
		  ))
		}
	  </div>
	  <img className={styles.cloud_img} src={cloud} alt="тупо облако"/>
	</div>
  )

}