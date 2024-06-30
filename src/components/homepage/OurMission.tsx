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
          <div className="mission-bubble art-piece">
            <p className="poppins-regular">
            Christ</p>
          </div>
          <div className="mission-bubble art-piece">
            <p className="poppins-regular">
            Community</p>
          </div>
          <div className="mission-bubble art-piece">
            <p className="poppins-regular">
            Church</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
