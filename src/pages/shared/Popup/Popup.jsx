import styles from "./Popup.module.css";
import {ThisDayItem} from "../../Home/components/ThisDayInfo/ThisDayItem";
import React from "react";
import {GlobalSvgSelector} from "../../../assets/icons/GlobalSvgSelector";

export const Popup = () => {
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
    <>
	  <div className={styles.blur}></div>
	  <div className={styles.popup}>
		<div className={styles.day}>
		  <div className={styles.day_temp}>20°</div>
		  <div className={styles.day_name}>Среда</div>
		  <div className={styles.img}>
			<GlobalSvgSelector id="sun"/>
		  </div>
		  <div className={styles.time}>
			Время <span>21:40</span>
		  </div>
		  <div className={styles.city}>Москва</div>
		</div>
		<div className={styles.itemsContainer}>
		  {
			items.map((item) => (
			  <ThisDayItem key={item.icon_id} item={item}/>
			))
		  }
		</div>
		<div className={styles.close}>
		  <GlobalSvgSelector id="close"/>
		</div>
	  </div>
	</>
  )

}