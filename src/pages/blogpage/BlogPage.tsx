import { useState, useEffect } from 'react';
import client from '../../utilities/Contentful';
import { Entry } from 'contentful';
import './BlogPage.css';
import blogData from '../../data/blog.json'

function BlogPage() {
  const [entry, setEntry] = useState<Entry<any> | null>(null);

  // TODO: MAP THROUGH ENTRY URLS
  var entryURL = blogData[0]

  useEffect(() => {
    client.getEntry(entryURL)
      .then(entry => setEntry(entry))
      .catch(error => console.error(error));
  }, []);

  if (!entry) {
    return <div>Loading...</div>;
  }

  // grabbing the entry fields from contentful for blog
  const parsedResponse = JSON.parse(JSON.stringify(entry.fields));
  const { title, blogContent, blogHero } = parsedResponse;

  // Blog hero is console logging right
  console.log("Blog Hero:", JSON.stringify(blogHero));

  return (
    <div> 
      <div className="page-container">
        <div className="mediumContainer">
          <div className="mini-spacer"></div>
          {/* TODO: Map through blog container for blog */}
          <div className="blog-container">
            <div className="blog">
            <div className="blog-title">
              {title}
            </div>
            {/* {blogHero} */}
            <div className="spacer"></div>
            {blogContent} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;