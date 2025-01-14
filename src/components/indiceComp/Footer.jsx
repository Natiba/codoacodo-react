import Members from "../indiceComp/Members";
import "../../style/inicio/footer.css";

const Footer = ({ creator }) => {
  return (
    <>
      <div className="footer-container">
        <div className="us">
          <h3 className="us-title">About us</h3>
          <p className="us-bottom">
            Somos un grupo de estudiantes de React en Codo a Codo y este es
            nuestro TP, en el cual implementamos los conocimientos adquiridos
            durante la cursada
          </p>
        </div>

        <div className="us">
          <h3 className="us-title">Know us</h3>
          <a href={Members} className="us-bottom">
            Members
          </a>
        </div>

        <div className="us">
            <h3 className="us-title">Follow us</h3>
          <div className="us-bottom">
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

        
          <div className="us">
            <h3 className="us-title">Find us</h3>
            <iframe className="us-bottom"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6724158.626362215!2d-65.08513528054667!3d-34.622349218230625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac7e0ec09bd%3A0xcd28f7743d27629c!2sTeatro%20Nacional%20Cervantes!5e0!3m2!1ses-419!2sar!4v1670610079620!5m2!1ses-419!2sar"
              width="200"
              height="200"
              title="Google Maps Direction"
              allowfullscreen=""
              frameborder="0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        
      </div>

      <h6 className="footer-team">{creator}</h6>
    </>
  );
};

export default Footer;
