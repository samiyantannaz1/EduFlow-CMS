import { useEffect, useState } from "react"
import { Container, Row,Col } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import styles from './articles.module.css'
import ArticleItem from "../../components/articleItem/articleItem"
import Accordion from 'react-bootstrap/Accordion';
import { MdCategory } from "react-icons/md";
import { FaSort } from "react-icons/fa6";
export default function Articles() {
  const [articles, setArticles] = useState([])
  const [searchKey,setSearchKeay]=useState("")
  const [sortType ,setSortType]=useState("newest")
 
    
  useEffect(()=>{


const getArticles = async () => { //chon tabe async nemitonim mostaghim dakhele get article fetch konim

    const res = await fetch("http://localhost/react/api/articles/")
    const data = await res.json()
    setArticles(data.data)
  }
    const getArticleByOrder=async(column,order)=>{
const res=await fetch(`http://localhost/react/api/articles/?column=${column}&order=${order}`)
const data=await res.json()
console.log(data)
setArticles(data.data);
}

   if(sortType=='newest') {
    getArticleByOrder("id","desc")

   }
    else if(sortType=='oldest') {
         getArticleByOrder ("id","asc")
    }
     else if(sortType=='shortest') {
         getArticleByOrder ("readingTime","asc")
    }
       else if(sortType=='longest') {
         getArticleByOrder ("readingTime","desc")
    }
    


else{
    getArticles()
}



}, [sortType])

const searchHandler=async()=>{
   
const res=await fetch(`http://localhost/react/api/articles/?search=${searchKey}&column=category`)
const data=await res.json() 

setArticles(data.data) 
console.log(data.data)
setSearchKeay("")
}
const sortHandler=(e)=>{
    setSortType(e.target.id)
    console.log(sortType)
     
}

  return (
    <>
      <Container>
  <Row>
          <div className={styles.serchSection}>
           <div>
 <h2 className=" yekan">لیست مقالات</h2>
           </div>
           <div>
            <input type="text" value={searchKey} onChange={(e)=>setSearchKeay(e.target.value)}/>
            <button onClick={searchHandler}>جستجو</button>
           </div>
        </div>
       
  </Row>
      <div className={styles.articleSection}>
              <div className={styles.sectionRight}>
                  <Accordion  className={styles.accordionItem}  >
      <Accordion.Item eventKey="0" >
        <Accordion.Header><FaSort />مرتب سازی</Accordion.Header>
        <Accordion.Body>
   
         <Form>
    {/* جدیدترین */}
    <Form.Check
      type="radio"
      id="newest"
      name="sort"
      label="جدیدترین"
      value="newest"
      onChange={sortHandler}
    />

    {/* قدیمی‌ترین */}
    <Form.Check
      type="radio"
      id="oldest"
      name="sort"
      label="قدیمی‌ترین"
      value="oldest"
      className="mt-2"
        onChange={sortHandler}
    />

    {/* کوتاه‌ترین */}
    <Form.Check
      type="radio"
      id="shortest"
      name="sort"
      label="کوتاه‌ترین"
      value="shortest"
      className="mt-2"
        onChange={sortHandler}
    />

    {/* بلندترین */}
    <Form.Check
      type="radio"
      id="longest"
      name="sort"
      label="بلندترین"
      value="longest"
      className="mt-2"
        onChange={sortHandler}
    />
  </Form>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="my-4 ">
        <Accordion.Header><MdCategory />دسته بندی</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
      {articles.length>0 ?
        <div className={styles.sectionLeft}>
            <Row className="gy-4">
                 {articles.map(article=>(
                    <Col className="col-12 col-md-6 col-lg-4">
                    <ArticleItem {...article}/>
                    </Col>
                ))}

            </Row>
          
        </div>:
        <p>not found article</p>
      }
      
      </div>
  

         {/* <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4">
             
             </Row> */}
      </Container>
    </>
  )
}


// fetch(`http://localhost/react/api/articles/?search=${searchKey}&column=category`     search kardan