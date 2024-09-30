import React, { useState } from 'react';
import news_feed from './sample_news_stories.json';
import Story from './components/Story'; 

function App() {
  // Get stories from news feed
  const [stories, setStories] = useState(news_feed.results);
  console.log(stories);
  
  const removeStory = (index) => {
    const newStories = stories.filter((_, i) => i !== index);
    setStories(newStories);
  };

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <div className="stories">
        {stories.map((story, index) => (
          <Story
            key={index}
            story={story}
            removeStory={() => removeStory(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
