// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './articlreItem.module.css'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

export default function ArticleItem({image,title,writter,category,readingTime,id}){
    return(
        <>
                 <Card className={styles.card}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={styles.cardText}>
        {category}
        <button><Link to={`article/${id}`}> <span>ادامه</span><span style={{padding:'10px',fontWeight:'bold',fontSize:"20px"}}><FaArrowLeft  fontWeight='bold'/></span></Link></button>
        </Card.Text>
        <hr/>
        <div className={styles.footer}>
            <p style={{fontSize:'13px'}}><span>نویسنده:</span> <span>{writter}</span></p>
            <p><span>{readingTime}</span><span>دقیقه</span></p>
        </div>
      
      </Card.Body> 
    </Card>
        </>
    )
}