import "./Blog.css";
import blogData from "../../data/blog.json";
import imageFrame from "../../assets/imgs/picture-frame.png";
import circleLogo from "../../assets/imgs/circle-logo.png";

const TopBlogPosts = () => {
  // console logging for testing!
  // TODO: NOT QUITE WORKING YET IT IS CONSOLE LOGGING THE URL
  var featured = Object.keys(blogData[0]);
  console.log("Blog Data for top blog posts: " + featured);

  return (
    <>
        <div className="largeContainer">
          {/* header container */}
          <div className="header-circle-container">
            <div className="art-piece highlight-text poppins-semibold">
              Our Top Blog Posts
            </div>
            <div className="art-piece">
              <img className="small-circle-logo small-circle-logo-left" src={circleLogo}></img>
            </div>
          </div>

          <div className="mini-spacer"></div>
          {/* blog carsoul or blog design here / utility */}

          <div className="top-blog-container">
            <div
              className="top-blog-item"
              style={{ backgroundImage: `url(${imageFrame})` }}
            ></div>
            <div
              className="top-blog-item"
              style={{ backgroundImage: `url(${imageFrame})` }}
            ></div>
          </div>
        </div>
    </>
  );
};

export default TopBlogPosts;
