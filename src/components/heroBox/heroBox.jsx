import styles from './heroBox.module.css'
import React from "react";
//countUp
import CountUp from 'react-countup';
export default function HeroBox({title,count,icon}){

return(
    <div className={styles.heroBoxContainer}>
        <div className={styles.heroBoxHeader}>
            {/* به همون آیکونی که به‌صورت props وارد می‌کنی style بدی،*/}
       {icon && React.cloneElement(icon, { style: { fontSize: "40px", color: "blue" } })}
            <b className={styles.heroBoxTitle}>{title}</b>

        </div>
      <p className={styles.heroBoxCount}>

        <CountUp
         start={0}
         end={count}
         duration={4}
         separator=","  //joda konande
         delay="0.5"
        />

      </p>

    </div>
)

}


//      {/* به همون آیکونی که به‌صورت props وارد می‌کنی style بدی،*/} //
//{icon && React.cloneElement(icon, { style: { fontSize: "40px", color: "blue" } })}
//// npm i react-countup