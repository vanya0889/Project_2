import React from "react";
import styles from "./Days.module.css"
import {Tabs} from "./Tabs";
import {Card} from "./Card";


export const Days = () => {
  const days = [
	{
	  day_id: "Сегодня",
	  day_info: "28 авг",
	  icon_id: "small_rain_sun",
	  temp_day: "+18°",
	  temp_night: "+15°",
	  info: "Небольшой дождь и солнце"
	},

	{
	  day_id: "Завтра",
	  day_info: "29 авг",
	  icon_id: "rain",
	  temp_day: "+15°",
	  temp_night: "+10°",
	  info: "Небольшой дождь"
	},

	{
	  day_id: "Пн",
	  day_info: "30 авг",
	  icon_id: "small_rain_sun",
	  temp_day: "+18°",
	  temp_night: "+15°",
	  info: "Небольшой дождь и солнце"
	},

	{
	  day_id: "Вт",
	  day_info: "31 авг",
	  icon_id: "small_rain_sun",
	  temp_day: "+18°",
	  temp_night: "+15°",
	  info: "Небольшой дождь и солнце"
	},

	{
	  day_id: "Ср",
	  day_info: "1 сен",
	  icon_id: "mainly_cloudy",
	  temp_day: "+18°",
	  temp_night: "+15°",
	  info: "Облачно"
	},

	{
	  day_id: "Чт",
	  day_info: "2 сен",
	  icon_id: "sun",
	  temp_day: "+18°",
	  temp_night: "+15°",
	  info: "Солнечно"
	},

	{
	  day_id: "Пт",
	  day_info: "3 сен",
	  icon_id: "sun",
	  temp_day: "+18°",
	  temp_night: "+15°",
	  info: "Солнечно"
	}

  ]


  return (
	<>
	  <Tabs/>
	  <div className={styles.days}>
		{
		  days.map((day) => (
			<Card day={day}/>
		  ))
		}
	  </div>
	</>

  )
}