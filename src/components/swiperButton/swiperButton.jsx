import styles from './swiperButton.module.css'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useSwiper } from 'swiper/react'
export default function SwiperButton(){
const swiper =useSwiper()
    return(
      <>
        <div className={styles.swiperBtn}>
         
            <button onClick={()=>swiper.slidePrev()}  className='rounded  border border-0 mx-3 fs-4'><GrNext /></button>
               <button onClick={()=>swiper.slideNext()}  className='rounded border border-0 fs-4'><GrPrevious /></button>
        </div>
      </>
    )
} 