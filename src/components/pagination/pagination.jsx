import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CommentItem from "../commentItem/commentItem";
import { Container } from "react-bootstrap";
 //swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';



export default function Pagination() {
  const [comments, setComments] = useState([]);
const [pageCount,setPageCount]=useState('')
  const fetchComment = (pageNum) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?_page=${pageNum}&_limit=5`)
      .then((res) =>{
    setPageCount( Math.ceil(res.headers.get('x-total-count'))/5)
     return res.json()
      }
    )
     
      .then((data) => setComments(data));
  };
// page number
  const handlePageClick = (data) => {
    const pageNum = data.selected + 1;
    fetchComment(pageNum);
  };
//number1
  useEffect(() => {
    fetchComment(1);
  }, []);

  return (
    <>

<Swiper
         className="comments-swiper"
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
       
      >
        {comments.map((item) => (
      
         <SwiperSlide> <CommentItem {...item}/></SwiperSlide>
        ))}
     
  </Swiper>
<Container style={{margin:'40px'}}>
      
     

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}//safhe daynamic
        previousLabel="< prev"
        containerClassName="pagination justify-content-center"
        previousClassName="page-item"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
        renderOnZeroPageCount={null}
        
      /> 
</Container>

    </>
  );
}

//&_limit=10
// fetch(`https://jsonplaceholder.typicode.com/comments?_page=${pageNum}&_limit=10`)


// import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCards } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import CommentItem from "../commentItem/commentItem";
// import "./commentsSwiper.css"; // CSS اختصاصی

// export default function CommentsSwiper() {
//   const [comments, setComments] = useState([]);

//   // Fetch 5 کامنت در هر صفحه
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=5")
//       .then((res) => res.json())
//       .then((data) => setComments(data));
//   }, []);

//   return (
//     <Swiper
//       className="comments-swiper"
//       effect={"cards"}
//       grabCursor={true}
//       modules={[EffectCards]}
//     >
//       {comments.map((item) => (
//         <SwiperSlide key={item.id}>
//           <CommentItem {...item} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
