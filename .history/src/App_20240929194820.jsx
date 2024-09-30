import news_feed from './sample_news_stories.json';
import story from './components/story';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="App">
      <Header/>
      <div>
        {story}
      </div>
    </div>
  );
}

export default App;
