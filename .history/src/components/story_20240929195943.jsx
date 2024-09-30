export default function Story(props){
    const{ results } = props;

    return ( 
    <>
    <div className="story">
        <div className="story_image">
            <img src={results.image_url} alt="{results}'s photos"/>
        </div>
        <div className="artistInfo">
            <h2>{artists.name}</h2>
            <p>Country: {artists.country}</p> <span></span>
            <p>Years active: {artists.years_active}</p>     
        </div>
    </div>
    </>
    );
}
