import './Blog.css'

const TopBlogPosts = () => {
  return (
    <>
     <div className="page-container">
     <div className="largeContainer">
      <div className="art-piece highlight-text">Our Top Blog Posts</div>
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