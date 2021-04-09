import React from 'react';
import { graphql, PageProps, useStaticQuery } from 'gatsby';

const pageQuery = graphql`
  {
    allGraphCmsDemo {
      nodes {
        demoText
      }
    }
  }
`;

const Home: React.FC<PageProps> = () => {
  const { allGraphCmsDemo } = useStaticQuery(pageQuery);

  console.log({ allGraphCmsDemo });

  return (
    <main>
      <h2>This is data from graphcms</h2>
      <pre>
        {allGraphCmsDemo.nodes.map(({ demoText }) => (
          <p key={demoText}>{demoText}</p>
        ))}
      </pre>
    </main>
  );
};

export default Home;
