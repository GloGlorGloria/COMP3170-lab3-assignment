import news_feed from './sample_news_stories.json';
import Header from './components/Header';
import Story from './components/Story';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;
  const storyList = stories.map(Story => <results key={results.name} results={results}/>)
  

  return (
    <div className="App">
      <Header/>
      {storyList}
    </div>
  );
}

export default App;
