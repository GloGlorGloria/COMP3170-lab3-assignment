export default function Story(props) {
    const {result} = props;
    
    function handleDelete(e) {
        
        if (e.target === e.currentTarget) {
            return;
          }
    
        if (e.target.tagName !== `SPAN`) {
            return;
          }
          e.currentTarget.remove();
        //   console.log("delete button clicked")
    }

    return(
        <div className="story" onClick={handleDelete}>
            <span className="delete">x</span>
            <div className="story_header">
                <div className="story_image">
                    <img src={story.image_url} alt="News Story"/>
                </div>
                <h1>
                    <a href={story.link} target="_blank">{re.title}</a>
                    <span className="story_creator">By: {story.creator}</span>
                </h1>
            </div>
            <p className="description">
                {story.description}
            </p>
        </div>
    );
}