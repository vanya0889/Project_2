import React from "react";
import Select from "react-select";
import style from "./Header.module.css"
import icon from "../../../assets/icons/snoop.gif"
import change from "../../../assets/icons/changeTheme.png"


export const Header = () => {
  const options = [
	{value: "city-1", label: "Москва"},
	{value: "city-2", label: "Санкт-Петербург"},
	{value: "city-3", label: "Шахты"}
  ];

  const colorStyles = {
    control: styles => ({
	  ...styles,
	  colorText: "white",
	  backgroundColor: 'rgba(71, 147, 255, 0.2)',
	  width: '194px',
	  height:' 37px',
	  border: 'none',
	  borderRadius:'10px',
	  zIndex:100,

	})
  }



  return (
	<div className={style.header}>
	  <div className={style.wrapper}>
		<div className={style.logo}>
		  <img className={style.logo} src={icon} alt="kremlin-icon"/>
		</div>
		<div className={style.title}>Rap weather</div>
	  </div>


	  <div className={style.wrapper}>
		<div className={style.changeTheme}>
		  <img src={change} alt=""/>
		</div>
		<Select
		  defaultValue={options[0]}
		  styles={colorStyles}
		  options={options}
		/>
	  </div>
	</div>
  )
}