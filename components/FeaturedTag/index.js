import React from 'react';

const FeaturedTags = ({ tags }) => (
  <section>
    <div className="tags">
      {tags.map(tag => (
        <a
          href={`tags${tag}`}
          title={`tags${tag}`}
        >
          { tag }
        </a>
      ))
      }
    </div>
  </section>
);

export default FeaturedTags;
