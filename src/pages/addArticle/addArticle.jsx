import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap"
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import styles from './addArticle.module.css'
export default function AddArticle(){
  const [formData,setFormData]=useState({
    image:'',
    title:'',
     description:'',
     writter:'',
     category:'',
     readingTime:''
  })

  const addArticleHandler=async(e)=>{
    e.preventDefault();

    try {
      // ارسال داده‌ها به سرور با POST
      const res = await axios.post('http://localhost/react/api/articles/', formData);

      console.log(res.data);

      // پیام موفقیت
      Swal.fire({
        title: "موفق!",
        text: "مقاله با موفقیت ثبت شد.",
        icon: "success"
      });

      // پاک کردن فرم بعد از ارسال
      setFormData({
        title: '',
        description: '',
        writter: '',
        image: '',
       category: '',
        readingTime: ''
      });

    } catch (error) {
      console.error("POST error:", error);
      Swal.fire({
        title: "خطا!",
        text: "مشکلی در ارسال مقاله رخ داد.",
        icon: "error"
      });
    }
  }
return(
    <>
      <Container>
        
      <div className={styles.parent}>
                      <Form>
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>عنوان مقاله</Form.Label>
         <Form.Control type="text" onChange={(e)=>setFormData({...formData,title:e.target.value})} value={formData.title}/>
              {/* <Form.Label>توضیح کوتاه</Form.Label>
         <Form.Control type="text"  onChange={(e)=>setFormData({...formData,description:e.target.value})}/> */}
          <Form.Label>نویسنده مقاله</Form.Label>
       <Form.Control type="text"  onChange={(e)=>setFormData({...formData,writter:e.target.value})} value={formData.writter}/>
             <Form.Label>عکس مقاله</Form.Label>
         <Form.Control type="text"  onChange={(e)=>setFormData({...formData,image:e.target.value})} value={formData.image}/>
             <Form.Label>موضوع مقاله</Form.Label>
         <Form.Control type="text" onChange={(e)=>setFormData({...formData,category:e.target.value})} value={formData.category}/>
              <Form.Label>مدت زمان خواندن</Form.Label>
        <Form.Control type="text" onChange={(e)=>setFormData({...formData,readingTime:e.target.value})} value={formData.readingTime}/>
     </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>توضیح مقاله</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e)=>setFormData({...formData,description:e.target.value})} value={formData.description} />
      </Form.Group>
         <Button variant="outline-secondary" onClick={addArticleHandler}>ارسال مقاله</Button>
    </Form>
   
      </div>
   
       </Container>
       
    </>
)
}

    //        <Form>
    //   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //     <Form.Label>عنوان مقاله</Form.Label>
    //     <Form.Control type="" />
    //          <Form.Label>توضیح کوتاه</Form.Label>
    //     <Form.Control type="email"  />
    //          <Form.Label>نویسنده مقاله</Form.Label>
    //     <Form.Control type="email" />
    //          <Form.Label>عکس مقاله</Form.Label>
    //     <Form.Control type="email"  />
    //          <Form.Label>موضوع مقاله</Form.Label>
    //     <Form.Control type="email"  />
    //          <Form.Label>مدت زمان خواندن</Form.Label>
    //     <Form.Control type="email"/>
    //   </Form.Group>
    //     <Button variant="outline-secondary">ارسال مقاله</Button>
    // </Form>