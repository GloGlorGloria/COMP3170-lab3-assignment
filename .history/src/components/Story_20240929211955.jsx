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

        
          function truncateText(text, wordLimit) {
            console.log("Text received:", text); // Debugging: Check what text is passed
            if (!text) {
                return "No description available."; // Fallback if the description is missing
            }
            let words = text.split(" ");
            console.log("Words:", words); // Debugging: Check how the text is split into words
            if (words.length > wordLimit) {
                return words.slice(0, wordLimit).join(" ") + "...";
            }
            return text; // Return full text if it's within the limit
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
            {truncateText(results.description, 20)}
            </p>
        </div>
    );
}