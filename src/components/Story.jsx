import React from 'react';

const placeholderImage = 'https://placehold.co/600x400?text=News+Story';

const Story = ({ story, removeStory }) => {
  const { title, link, creator, description, image_url } = story;

  return (
    <div className="story">
      <span className="delete" onClick={removeStory}>
        &times;
      </span>
      <div className="story_content">
        <div className="story_image">
          <img src={image_url || placeholderImage} alt={title} />
        </div>
        <div className="story_header">
          <h1>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h1>
          
        </div>
        
      </div>
      <div className="story_creator">By: {creator ? creator.join(', ') : 'Unknown Author'}</div>
      <p>{description}</p>
    </div>
  );
};

export default Story;
