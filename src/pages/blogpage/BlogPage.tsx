import { useState, useEffect, JSXElementConstructor, 
  ReactElement, ReactNode, ReactPortal } from 'react';
import client from '../../utilities/Contentful';
import { Entry } from 'contentful';
import './BlogPage.css';
import blogData from '../../data/blog.json'

function BlogPage() {
  const [entry, setEntry] = useState<Entry<any> | null>(null);

  // TODO: MAP THROUGH ENTRY URLS
  // OBJECT.KEYS relates to the JSON object
  var entryURL = Object.keys(blogData[0])[0];

  // set the url
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
  const { title, blogContext, blogHero } = parsedResponse;
  // console logging right
  // console.log("Blog Hero:", JSON.stringify(blogContext));

  return (
    <div> 
      <div className="page-container">
        <div className="mediumContainer">
        <div className="page-header-text poppins-regular">
          Blog Page</div>
          <div className="spacer"></div>

          <div className="blog-container">
            <div className="blog">
              {/* blog title */}
            <div className="blog-title poppins-bold">
              {title}
            </div>
            <div className="spacer"></div>
            {/* blog hero */}
            {blogHero && (
              <div className="blog-hero">
                {blogHero.content.map((paragraph:
                // this is all the parameters the paragraph could be 
                // seperating parapgraphs using CSS
                { content: { value: string | number | boolean 
                  | ReactElement<any, string | JSXElementConstructor<any>> | 
                  Iterable<ReactNode> | ReactPortal | null | undefined; }[]; }, 
                  index: number) => (
                  <p key={index} 
                  className="blog-hero-paragraph poppins-semibold">
                    {paragraph.content[0].value}
                  </p>
                ))}
              </div>
            )}

            {/* TODO: NEED TO SET BUTTON THAT TAKES TO FULL CONTEXT */}
            {/* TODO: NEED TO CENTER CSS BUTTON HIDE/SHOW */}
            {/* LINKS TO SINGLE BLOG PAGE */}
            <div className="blog-btn-container">
            <button className="read-blog-btn poppins-regular">
            Read {title}</button>
            </div>

            <div className="spacer"></div>

            {/* blog context */}
            {blogContext && (
              <div className="blog-content">
                {blogContext.content.map((paragraph:
                { content: { value: string | number | boolean 
                  | ReactElement<any, string | JSXElementConstructor<any>> | 
                  Iterable<ReactNode> | ReactPortal | null | undefined; }[]; }, 
                  index: number) => (
                  <p key={index} 
                  className="blog-content-paragraph poppins-regular">
                    {paragraph.content[0].value}
                  </p>
                ))}
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;