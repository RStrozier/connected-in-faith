import { useState, useEffect } from 'react';
import client from '../../utilities/Contentful';
import { Entry } from 'contentful';

function BlogPage() {
  const [entry, setEntry] = useState<Entry<any> | null>(null);

  // get blog title and entry
  useEffect(() => {
    client.getEntry('url52FIPIPsRMg4s9ejHA')
      .then(entry => setEntry(entry))
      .catch(error => console.error(error));
  }, []);

  if (!entry) {
    return <div>Loading...</div>;
  }

  // grabbing the entry fields from contentful for blog
  const parsedResponse = JSON.parse(JSON.stringify(entry.fields));
  const { title, blogContent } = parsedResponse;

  return (
    <div> 
      <div className="page-container">
        <div className="largeContainer">
        {title}
        <br />
        {blogContent} 
        </div>
      </div>
    </div>
  );
}

export default BlogPage;