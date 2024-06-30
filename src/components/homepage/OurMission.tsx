import circleLogo from "../../assets/imgs/circle-logo.png";
import "./componenthomepage.css";

const OurMission = () => {
  return (
    <>
      <div className="mediumContainer">
        <div className="spacer"></div>
        <div className="header-circle-container">
          <div className="art-piece">
            <img
              className="small-circle-logo small-circle-logo-right"
              src={circleLogo}
            ></img>
          </div>
          <div className="art-piece highlight-text poppins-semibold">
            Our Mission
          </div>
        </div>

        <div className="mission-statement">
          <div className="mission-bubble">
            <p className="poppins-regular">
            This is how I view it Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
