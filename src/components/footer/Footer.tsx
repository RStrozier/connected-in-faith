import "./Footer.css";
import CIFTitleImage from "../../assets/imgs/headline-homepage-title.png";
import DoubleLine from "../DoubleLine";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="mini-spacer"></div>
        <DoubleLine />
        <img src={CIFTitleImage} className="cif-title-image"></img>
      </div>
    </>
  );
};

export default Footer;
