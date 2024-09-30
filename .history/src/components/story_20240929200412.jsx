export default function Story(props){
    const{ results } = props;

    return ( 
    <>
    <div className="story">
        <div className="story_image">
            <img src={results.image_url} alt="https://placehold.co/"/>
        </div>
        <div className="story_header">
            <h1>{results.title}</h1>
            <span className="story_creator">{results.creator}</span>
            }>Country: {artists.country}</span> <span></span>
            <p>Years active: {artists.years_active}</p>     
        </div>
    </div>
    </>
    );
}
