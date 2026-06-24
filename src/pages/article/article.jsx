import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from './article.module.css';
import Swal from "sweetalert2";
import axios from "axios";

export default function Article() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  // دریافت مقاله
  useEffect(() => {
    const getArticle = async () => {
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
  }, [articleId]);

  // حذف مقاله
  const deletArticleHandler = (id) => {
    Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "بعد از حذف، امکان بازگردانی وجود ندارد!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله، حذف کن",
      cancelButtonText: "لغو"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost/react/api/articles/?id=${id}`)
          .then(() => {
            Swal.fire({
              title: "حذف شد!",
              text: "مقاله با موفقیت حذف شد.",
              icon: "success"
            }).then(() => {
              navigate('/');
            });
          })
       
      }
    });
  };

  if (!article) return <p>درحال بارگذاری مقاله...</p>;

  return (
    <Container>
      <Row className="my-5 py-5">
        {/* کارت مقاله */}
        <Col xs={12} lg={4}>
          <div className={styles.card}>
            <div className={styles.parent}>
              <img src={article.image} alt={article.title} />
            </div>

            <div className={styles.title}>
              <p>{article.title}</p>
            </div>

            <div className={styles.body}>
              <p>نویسنده: {article.writter}</p>
              <p>مدت زمان مطالعه: {article.readingTime}</p>
            </div>

            <div className={styles.footer}>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => deletArticleHandler(articleId)}
              >
                حذف مقاله
              </button>

              <Link to={`/edit/${articleId}`} className="btn btn-outline-primary ms-2">
                ویرایش مقاله
              </Link>
            </div>
          </div>
        </Col>

        {/* توضیحات کامل مقاله */}
        <Col xs={12} lg={8}>
          <h2 className="mt-2">{article.title}</h2>
          <p className="text-muted">
            نویسنده: {article.writter} — مدت زمان مطالعه: {article.readingTime}
          </p>
          <hr />
          <p className="mt-4" style={{ lineHeight: "2" }}>
            {article.description}
          </p>

          <Link to="/" className="btn btn-secondary mt-4">
            بازگشت به لیست مقالات
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
