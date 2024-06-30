import { useEffect } from "react";
import { setupIntersectionObserver } from "../../utilities/IntersectionObserver";
import "./HomePage.css";
import TopBlogPosts from "../../components/blog/TopBlogPosts";

const HomePage = () => {
  useEffect(() => {
    const cleanupObserver = setupIntersectionObserver();

    // Clean up the observers when the component is unmounted
    return cleanupObserver;
  }, []);

  return (
    <>
      <div className="page-container">
        <div className="largeContainer">
          <div className="spacer"></div>
          <div className="art-piece highlight-text">
           This is Connected in Faith 
           </div>
          <div className="mini-spacer"></div>
          <div className="homepage-text-intro">
            How does it really feel to leave religion, and then come back?
            Well, it's definitelty not easy. From the questions we are
            too scared to ask, to the judgement from others we eventually feel.
            Let's create a safe space to talk, ask questions, and grow closer to
            God... minus the judgement.
          </div>
        <div className="spacer"></div>
        {/* top blog post component */}
        <TopBlogPosts />
        </div>
      </div>
    </>
  );
};

export default HomePage;
