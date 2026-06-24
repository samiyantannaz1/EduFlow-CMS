import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './MyNavbar.module.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';



export default function MyNavbar() {



  

  const expand = 'lg';

  return (
    <Navbar key={expand} expand={expand}  style={{backgroundColor:'#96a0adff'}}>
      <Container>
         <Navbar.Brand href="#" className='lalezar fs-1'>جام جم</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              منو
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to="/" className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }>صفحه اصلی</NavLink>
             
               <NavLink to="/addArticle" className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }>ساخت مقاله</NavLink>
                 <NavLink to="/articles" className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }>مفالات</NavLink>
                   <NavLink to="/courses" className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }>دوره ها</NavLink>
              <NavLink to="/about" className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }>درباره ما</NavLink>

          

             

            

            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}



