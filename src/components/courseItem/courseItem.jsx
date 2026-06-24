import styles from "./courseItem.module.css";
import { FaDollarSign } from "react-icons/fa6";
export default function CourseItem({image,title,description,teacher,studentCount,mainPrice}) {
  return (
    <div className={styles.courseCardWrapper}>
      <div className={styles.courseCardImage}>
       <img src={image}/>
        <p>{studentCount}</p>
      </div>
      <div className={styles.courseCardContent}>
        {title}
        {description}
      </div>
      <div className={styles.courseCardTeacher}>{teacher}</div>
      <div className={styles.courseCardFooter}>
        <button>
      <p>ثبت نام دوره</p>
        </button>

         <p>
          <span><FaDollarSign /></span>
           {mainPrice}
           </p>
      </div>
    </div>
  );
}

