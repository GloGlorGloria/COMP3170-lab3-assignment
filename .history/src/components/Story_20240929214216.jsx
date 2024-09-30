export default function Story(props) {
    const {results} = props;

    function exceedText(text) {
        if (!text) return ""; 

        const words = text.split(" "); 
        const truncatedText = words.slice(0, 50).join(" "); 
      
        return words.length > 50 ? truncatedText + "..." : truncatedText;
      }
    
    function handleDelete(e) {
        if (e.target === e.currentTarget) {
            return;
          }
        if (e.target.tagName !== `SPAN`) {
            return;
          }
          e.currentTarget.remove();

}

    return(
        <div className="story" onClick={handleDelete}>
            <span className="delete">x</span>
            <div className="story_header">
                <div className="story_image">
                    <img src={results.image_url} alt="News Story"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400?text=News Story";/>
                </div>
                <h1>
                    <a href={results.link} target="_blank">{results.title}</a>
                    <span className="story_creator">By: {results.creator ? results.creator : 'Anonymous'} </span>
                </h1>
            </div>
            <p className="description">
            {exceedText(results.description)}
            </p>
        </div>
    );
}