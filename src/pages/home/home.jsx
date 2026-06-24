import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArticleItem from "../../components/articleItem/articleItem";

import styles from "./home.module.css";
import Hero from "../../components/hero/hero";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//
import { Autoplay } from "swiper/modules";
import SwiperButton from "../../components/swiperButton/swiperButton";
import Pagination from "../../components/pagination/pagination";
import CourseItem from "../../components/courseItem/courseItem";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      //chon tabe async nemitonim mostaghim dakhele get article fetch konim
      const res = await fetch("http://localhost/react/api/courses/"); //etelaat 6 maghale aval ra daryaft mikonad
      const data = await res.json();
      setCourses(data.data);
    };

    const getArticles = async () => {
      //chon tabe async nemitonim mostaghim dakhele get article fetch konim
      const res = await fetch(
        "http://localhost/react/api/articles/?page=1&limit=8"
      ); //etelaat 6 maghale aval ra daryaft mikonad
      const data = await res.json();
      setArticles(data.data);
    };

    getCourses();
    getArticles();
  }, []);

  return (
    <>
      <div className={styles.parent}>
        <Hero />
        <Container>
          <div className={styles.courseSection}>
            <h2 className=" yekan my-5 lalezar fs-1">لیست دوره ها</h2>

            <Row>
              <Swiper
                className={styles.customSwiper}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                  1200: { slidesPerView: 4 },
                  992: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                  576: { slidesPerView: 1 },
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false, //karbar eslayde lams kar play ghey faal ama chon false dadim in khasiyat hamchenan hast
                }}
                modules={[Autoplay]}
              >
                {/* ijad */}
                <div className={styles.swiperTopSection}>
                  <h2 className={styles.sectionTitle}>جدیدترین دوره ها</h2>
                  <SwiperButton />
                </div>

                {courses.map((course) => (
                  <SwiperSlide>
                  
                    <CourseItem {...course} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Row>
          </div>

          {/* swiper */}
          <Row className="my-5">
            <Swiper
              className={styles.customSwiper}
              slidesPerView={1}
              spaceBetween={10}
              //responsive
              breakpoints={{
                1200: { slidesPerView: 4 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                576: { slidesPerView: 1 },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false, //karbar eslayde lams kar play ghey faal ama chon false dadim in khasiyat hamchenan hast
              }}
              modules={[Autoplay]}
            >
              {/* ijad */}
              <div className={styles.swiperTopSection}>
                <h2 className={styles.sectionTitle}>جدیدترین مقالات</h2>
                <SwiperButton />
              </div>

              {articles.map((article) => (
                <SwiperSlide>
                  <ArticleItem {...article} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>

          <Pagination />
        </Container>
      </div>
    </>
  );
}

//wave generator
//fancy border radius
//// src/components/Ui/Hero.jsx



//npm i react-countup    shomaresh adad
//import CountUp from 'react-countup';
////npm i aos
//npm i swiper  ijad slider
//https://swiperjs.com/demos

//https://swiperjs.com/demos#autoplay
//2 import { Autoplay} from 'swiper/modules'
// 3   autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}

//  modules={[Autoplay]}

// breakpoints={{
//       1200:{  slidesPerView:4},
//       992:{ slidesPerView:3},
//       768:{ slidesPerView:2},
//        576:{ slidesPerView:1}
//     }
//     }

//import { useSwiper } from 'swiper/react'

//npm install react-paginate
