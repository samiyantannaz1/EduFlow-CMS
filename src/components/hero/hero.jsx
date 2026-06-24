import styles from './hero.module.css'
import coding from "../../assets/images/undraw_creative-flow_t3kz.svg"
import { Row,Col, Container } from 'react-bootstrap'
import HeroBox from '../heroBox/heroBox'
import { BsSkipStartFill } from "react-icons/bs";
import { FaUser, FaBook, FaRegNewspaper, FaProjectDiagram } from "react-icons/fa";
//aos
import Aos from 'aos';
import 'aos/dist/aos.css'

import { useEffect } from 'react';
export default function Hero(){
 const Users = [
  {
    title: "تعداد دانشجو",
    count: "3500",
    icon: <FaUser fontSize="30px" />
  },
  {
    title: "تعداد مقاله",
    count: "960",
    icon: <FaRegNewspaper fontSize="30px" />
  },

  {
    title: "تعداد دوره‌ها",
    count: "19",
    icon: <FaBook fontSize="30px" />
  },

  {
    title: "پروژه موفق",
    count: "18",
    icon: <FaProjectDiagram fontSize="30px" />
  }
];
//aos
useEffect(()=>{
 Aos.init();
},[])

    return(
        <>

        
         <div className={styles.parent}>
                <div className={styles.hero}>
       <Container>
           <Row  className="row-cols-1 row-cols-md-1 row-cols-lg-2">
            {/* aos */}
            <Col  data-aos="fade-left" className={styles.imgSection}>
            <img src={coding}  className="img-fluid " style={{width:"450px"}}/>
            </Col>
            <Col  data-aos="fade-right ">
            <h2 className={styles.heroTitle}>آمارها باعث افتخار ما هستند
            </h2>
         <Row className='gy-2'>
          {Users.map(user=>(
            <Col>
            <HeroBox {...user}/>
            </Col>
          ))}
         </Row>
         <p className={styles.startLearning}>
          <BsSkipStartFill  size="40px"/>
          <b>شروع دوره</b>
           
         </p>
            </Col>
          </Row>
       </Container>
        </div>
         </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill=" #E3E3E3"
      d="m0 128 60-5.3c60-5.7 180-15.7 300-5.4 120 10.7 240 42.7 360 32C840 139 960 85 1080 64s240-11 300-5.3l60 5.3V0H0Z"
    ></path>
  </svg>
        </>
    )
}
// npm i react-countup
//npm i aos      animation sazi
//import Aos from 'aos';
// import 'aos/dist/aos.css'

// useEffect(()=>{
//  Aos.init();
// },[])


//<Col  data-aos="fade-left">
