import { useEffect,useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2"
import { Container } from "react-bootstrap"
import styles from './editArticle.module.css'
import axios from 'axios';
export default function EditArticle(){
    const navigate=useNavigate()
    const [article,setArticle]=useState({
          image:'',
    title:'',
     description:'',
     writter:'',
     category:'',
     readingTime:'' 
    })
 
    const {articleId}=useParams()
    useEffect(()=>{
        const getArticle = async () => {//agar az await estefade nemikardim mitavanestim mostaghim va bedon tabe dakhele useEfect benevisim
           try {
             const res = await fetch(`http://localhost/react/api/articles/?id=${articleId}`);
             const data = await res.json();
             setArticle(data.data[0]);
           } catch (error) {
             console.error("Fetch article error:", error);
             Swal.fire({
               title: "خطا!",
               text: "مشکلی در دریافت مقاله رخ داد.",
               icon: "error"
             });
           }
         };
     
         getArticle();
    },[articleId])
   


// const editArticleHandler = async () => {
//   console.log("ارسال PUT با axios:", article);

//   axios.put(`http://localhost/react/api/articles/?id=${articleId}`, article)
//     .then(()=> {

//       Swal.fire({
//         title: "موفق!",
//         text: "مقاله با موفقیت ویرایش شد ✔",
//         icon: "success",
//         confirmButtonText: "باشه",
//       }).then(()=>{
//   navigate('/')
//       })//بهتر است navigate('/') داخل .then بعد از موفقیت درخواست باشد:
//     })
//     .catch(err => {
//       console.error("خطا در ارسال مقاله", err);
//       Swal.fire({
//         title: "خطا!",
//         text: "ارسال مقاله انجام نشد",
//         icon: "error",
//         confirmButtonText: "باشه",
//       });
//     });
 
// };
const editArticleHandler = async () => {
  try {
    console.log("ارسال PUT با axios:", article);

    // ارسال درخواست PUT
    const res = await axios.put(
      `http://localhost/react/api/articles/?id=${articleId}`, 
      article
    );
    console.log(res)

    // موفقیت
    await Swal.fire({
      title: "موفق!",
      text: "مقاله با موفقیت ویرایش شد ✔",
      icon: "success",
      confirmButtonText: "باشه",
    });

    // بعد از تایید Swal، هدایت به صفحه اصلی
    navigate('/');
    
  } catch (err) {
    console.error("خطا در ارسال مقاله", err);
    await Swal.fire({
      title: "خطا!",
      text: "ارسال مقاله انجام نشد",
      icon: "error",
      confirmButtonText: "باشه",
    });
  }
};



    return(
        <>
        <h1>edit article</h1>
          <Container>
        
      <div className={styles.parent}>
                      <Form>
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>عنوان مقاله</Form.Label>
         <Form.Control type="text" onChange={(e)=>setArticle({...article,title:e.target.value})} value={article.title}/>
              {/* <Form.Label>توضیح کوتاه</Form.Label>
         <Form.Control type="text"  onChange={(e)=>setArticle({...article,description:e.target.value})}/> */}
          <Form.Label>نویسنده مقاله</Form.Label>
       <Form.Control type="text"  onChange={(e)=>setArticle({...article,writter:e.target.value})} value={article.writter}/>
             <Form.Label>عکس مقاله</Form.Label>
         <Form.Control type="text"  onChange={(e)=>setArticle({...article,image:e.target.value})} value={article.image}/>
             <Form.Label>موضوع مقاله</Form.Label>
         <Form.Control type="text" onChange={(e)=>setArticle({...article,category:e.target.value})} value={article.category}/>
              <Form.Label>مدت زمان خواندن</Form.Label>
        <Form.Control type="text" onChange={(e)=>setArticle({...article,readingTime:e.target.value})} value={article.readingTime}/>
     </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>توضیح مقاله</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e)=>setArticle({...article,description:e.target.value})} value={article.description} />
      </Form.Group>
         <Button variant="outline-secondary" onClick={editArticleHandler}>ارسال مقاله</Button>
    </Form>
      </div>
   
       </Container>


        </>
    )
}