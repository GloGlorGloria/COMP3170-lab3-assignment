export default function Story(props) {
    const {results} = props;
    
    function handleDelete(e) {
        if (e.target === e.currentTarget) {
            return;
          }
        if (e.target.tagName !== `SPAN`) {
            return;
          }
          e.currentTarget.remove();

        
          function exceedText(text) {
            if (!text) return ""; 
          
            const words = text.split(" "); // Split the description into words
            const truncatedDesc = words.slice(0, 50).join(" "); // Take the first 50 words
          
            return words.length > 50 ? truncatedDesc + "..." : truncatedDesc;
          }
}

    return(
        <div className="story" onClick={handleDelete}>
            <span className="delete">x</span>
            <div className="story_header">
                <div className="story_image">
                    <img src={results.image_url} alt="News Story"/>
                </div>
                <h1>
                    <a href={results.link} target="_blank">{results.title}</a>
                    <span className="story_creator">By: {results.creator}</span>
                </h1>
            </div>
            <p className="description">
                {results.description}
            </p>
        </div>
    );
}