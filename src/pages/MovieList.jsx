import { useEffect } from "react";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch1";

export const MovieList =({title, apiPath})=>{
    
    const {data:movies}= useFetch(apiPath);
    useEffect(()=>{
        document.title=title;
    })
    return <div>
        <main className="container">
            {title=="Best Movies here"?(
                <div className="bg-body-teritiary p-5 border mb-5">
                    <h3 className="text-primary">Welcome to MovieSeek</h3>
                    <p className="lead">Discover movies you &apos;ll love with personalized suggestions, curated collections, and quick searches - your guide to finding great films. This is an assignment created for .Net Course</p>
                    <button className="btn btn-primary">Explore Now</button>
                </div>
            ):""}
            <h5 container="text-danger py-2 border-bottom   ">{title}</h5>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">   {/**dynamicaly changes no of cards depending on window size */}
                {movies.map((movie)=>{
                    return <Card key={movie.id} movie={movie}/>
                })}
            </div>
        </main>
    </div>;
};
