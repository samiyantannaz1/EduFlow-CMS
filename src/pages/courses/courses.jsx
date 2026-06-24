import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import CourseItem from "../../components/courseItem/courseItem";
import styles from "./courses.module.css";
import { MdCategory } from "react-icons/md";
import { FaFilter } from "react-icons/fa6";
import { FaSort, FaAnchorCircleCheck } from "react-icons/fa6";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("");
  const [courseState, setCourseState] = useState("");
  const [sort, setSort] = useState("");

  // ===========================
  // توابع async کمکی قبل از useEffect
  // ===========================
  const getCourses = async () => {
    const res = await fetch("http://localhost/react/api/courses/");
    const data = await res.json();
    setCourses(data.data);
  };

  const getCourseByOrder = async (column, order) => {
    const res = await fetch(
      `http://localhost/react/api/courses/?column=${column}&order=${order}`
    );
    const data = await res.json();
    setCourses(data.data);
  };

  const getCourseByState = async (status) => {
    const res = await fetch(
      `http://localhost/react/api/courses/?state=${status}`
    );
    const data = await res.json();
    setCourses(data.data);
  };

  const getCoursesByCategory = async (cat) => {
    const res = await fetch(
      `http://localhost/react/api/courses/?category=${cat}`
    );
    const data = await res.json();
    setCourses(data.data);
  };

  const searchHandler = async () => {
    const res = await fetch(
      `http://localhost/react/api/courses/?search=${searchKey}&column=title`
    );
    const data = await res.json();
    setCourses(data.data);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const  courseStateHandler = (e) => {
    setCourseState(e.target.value);
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  // ===========================
  // useEffect برای کنترل تغییر state ها
  // ===========================
  useEffect(() => {
    const fetchData = async () => {
      if (sort === "newest") await getCourseByOrder("id", "desc");
      else if (sort === "oldest") await getCourseByOrder("id", "asc");
      else if (sort === "cheapest") await getCourseByOrder("mainPrice", "asc");
      else if (sort === "most_expensive")
        await getCourseByOrder("mainPrice", "desc");
      else if (courseState == "recording") await getCourseByState(courseState);
      else if (courseState == "completed") await getCourseByState(courseState);
      else if (courseState == "presell") await getCourseByState(courseState);
      else if (category) {
        if (category === "frontend") await getCoursesByCategory("فرانت اند");
        else if (category === "backend") await getCoursesByCategory("بک اند");
      } else {
        await getCourses();
      }
    };

    fetchData();
  }, [category, courseState, sort]);

  



  

  // ===========================
  // JSX
  // ===========================
  return (
    <Container>
      {/* بخش جستجو */}
      <div className={styles.searchSection}>
        <div className={styles.rightSearchSection}>
          <h2>لیست دوره‌ها</h2>
        </div>
        <div className={styles.leftSearchSection}>
          <input onChange={(e) => setSearchKey(e.target.value)} />
          <button onClick={searchHandler}>جستجو</button>
        </div>
      </div>

      {/* بخش فیلتر و دوره‌ها */}
      <div className={styles.courseSection}>
        <Row>
          {/* ستون فیلتر */}
          <Col className="col-xs-12 col-md-2 col-lg-2">
            <div className={styles.sectionRight}>
              <Row className="row-cols-1">
                <Accordion className={styles.accordionItem}>
                  {/* مرتب سازی */}
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <FaSort /> مرتب سازی
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <Form.Check
                          type="radio"
                          id="newest"
                          name="sort"
                          label="جدیدترین"
                          value="newest"
                          onChange={sortHandler}
                        />
                        <Form.Check
                          type="radio"
                          id="oldest"
                          name="sort"
                          label="قدیمی‌ترین"
                          value="oldest"
                          className="mt-2"
                          onChange={sortHandler}
                        />
                        <Form.Check
                          type="radio"
                          id="cheapest"
                          name="sort"
                          label="ارزان‌ترین"
                          value="cheapest"
                          className="mt-2"
                          onChange={sortHandler}
                        />
                        <Form.Check
                          type="radio"
                          id="most_expensive"
                          name="sort"
                          label="گران‌ترین"
                          value="most_expensive"
                          className="mt-2"
                          onChange={sortHandler}
                        />
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* دسته بندی */}
                  <Accordion.Item eventKey="1" className="my-4">
                    <Accordion.Header>
                      <MdCategory /> دسته بندی
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <Form.Check
                          type="checkbox"
                          id="frontend"
                          name="category"
                          label="فرانت‌اند"
                          value="frontend"
                          onChange={categoryHandler}
                          checked={category === "frontend" ? true : false}
                        />
                        <Form.Check
                          type="checkbox"
                          id="backend"
                          name="category"
                          label="بک‌اند"
                          value="backend"
                          className="mt-2"
                          onChange={categoryHandler}
                          checked={category === "backend" ? true : false}
                        />
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* وضعیت دوره */}
                  <Accordion.Item eventKey="2" className="my-4">
                    <Accordion.Header>
                      <FaFilter />
                      <soan>وضعیت دوره</soan>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <Form.Check
                          type="switch"
                          id="completed"
                          label="تکمیل شده"
                          value="completed"
                          checked={courseState === "completed"}
                          onChange={courseStateHandler}
                        />

                        <Form.Check
                          type="switch"
                          id="recording"
                          label="در حال ضبط"
                          value="recording"
                          checked={courseState === "recording"}
                          onChange={courseStateHandler}
                        />

                        <Form.Check
                          type="switch"
                          id="presell"
                          label="پیش فروش"
                          value="presell"
                          checked={courseState === "presell"}
                          onChange={courseStateHandler}
                        />
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Row>
            </div>
          </Col>

          {/* ستون دوره‌ها */}
          <Col className="col-xs-12 col-md-10 col-lg-10">
            <div className={styles.sectionLeft}>
              <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4">
                {courses.map((course) => (
                  <Col key={course.id}>
                    <CourseItem {...course} />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
