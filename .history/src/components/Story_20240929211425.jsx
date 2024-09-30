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
        //   console.log("delete button clicked")
        
    function truncateText(text, wordLimit) {
        let words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";}
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