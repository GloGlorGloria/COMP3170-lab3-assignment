import news_feed from './sample_news_stories.json';
import Story from './components/Story';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;
  const storyList = stories.map(story => <Story key={story.name} story={story}/>)
  

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      {storyList}
    </div>
  );
}

export default App;
