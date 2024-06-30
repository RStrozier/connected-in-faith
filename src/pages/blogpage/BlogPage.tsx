import { useState, useEffect } from 'react';
import client from '../../utilities/Contentful';
import { Entry } from 'contentful';
import './BlogPage.css';
import blogData from '../../data/blog.json'

function BlogPage() {
  const [entry, setEntry] = useState<Entry<any> | null>(null);

  // TODO: MAP THROUGH ENTRY URLS
  console.log(blogData[0])
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

  // testing for spacing but not using yet
  console.log(blogHero);

  return (
    <div> 
      <div className="page-container">
        <div className="largeContainer">
          <div className="mini-spacer"></div>
          <div className="blog-title">
            {title}
          </div>
          {/* {blogHero} */}
        <div className="spacer"></div>
        {blogContent} 
        </div>
      </div>
    </div>
  );
}

export default BlogPage;