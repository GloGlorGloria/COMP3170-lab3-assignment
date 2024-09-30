import news_feed from './sample_news_stories.json';
import Story from './components/story';
import Header from './components/Header';

function App() {

  // // Get stories from news feed
  const stories = news_feed.results;
  const storyCard = stories.map(story => <Story stories={stories}/>)


  return (
    <div className="App">
      <Header/>
      <div>
        {storyCard}
      </div>
    </div>
  );
}

export default App;
