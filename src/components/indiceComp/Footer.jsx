import Members from '../indiceComp/Members'
import '../../style/inicio/footer.css'

const Footer = ({ creator }) => {
  return (
    <>
  
      <div classNameName="footer-container">

      <div className="know-us footer-info">
      <h3>About us</h3>
      <p>Somos un grupo de estudiantes de React en Codo a Codo y este es nuestro TP, en el cual implementamos los conocimientos adquiridos durante la cursada</p>
      </div>


      <div className="know-us">
      <h3>Know us</h3>
      <a href={Members} className="btn btn-primary">Members</a>
      </div>
    

      <div className="card text-center">
      <div classNameName="social">
        <h3>Follow us</h3>
        <a
          href="https://twitter.com"
          classNameName="socialLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i classNameName="fas fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://www.facebook.com/"
          classNameName="socialLink"
          target="_blank"
          rel="noopener noreferrer"
        >
            <i className="fa-brands fa-facebook"></i>
         
        </a>
        <a
          href="https://linkedin.com"
          classNameName="socialLink"
          target="_blank"
          rel="noopener noreferrer"
        >
         <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://instagram.com"
          classNameName="socialLink"
          target="_blank"
          rel="noopener noreferrer"
        >
         <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      </div>
  
  <div className="card-body">
    <div className="find-us">
    <h3>Find us</h3>
    </div>
    </div> 
   
    <h6 className="footer-team">{creator}</h6>
  </div>
 


    </>
  );
};

export default Footer;
