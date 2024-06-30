import { useState, useEffect } from 'react';
import client from '../../utilities/Contentful';
import { Entry } from 'contentful';

function BlogPage() {
  const [entry, setEntry] = useState<Entry<any> | null>(null);

  useEffect(() => {
    // getting judgement entry
    client.getEntry('url52FIPIPsRMg4s9ejHA')
      .then(entry => setEntry(entry))
      .catch(error => console.error(error));
  }, []);

  if (!entry) {
    return <div>Loading...</div>;
  }

  // console logging for testing purposes
  // TO-DO: FIGURE OUT HOW TO DISPLAY ENTRY FIELDS
  var content = entry.fields
  console.log(content)

  return (
    <div> 

    </div>
  );
}

export default BlogPage;