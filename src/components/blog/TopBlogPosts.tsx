import './Blog.css'
import blogData from '../../data/blog.json';

const TopBlogPosts = () => {
  // console logging for testing! 
  // TODO: NOT QUITE WORKING YET IT IS CONSOLE LOGGING THE URL
  var featured = Object.keys(blogData[0]);
  console.log("Blog Data for top blog posts: " + featured);

  return (
    <>
     <div className="page-container">
     <div className="largeContainer">
      <div className="art-piece highlight-text poppins-semibold">Our Top Blog Posts</div>
    </div>
    <div className="mini-spacer"></div>
    {/* blog carsoul or blog design here / utility */}
    <div className="largeContainer">
    <div className="top-blog-container">
      <div className="top-blog-item"></div>
      <div className="top-blog-item"></div>
      <div className="top-blog-item"></div>
      <div className="top-blog-item"></div>
    </div>
    </div> 

    </div>
    </>
  )
}

export default TopBlogPosts