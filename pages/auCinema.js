import React from "react";
import { Layout } from "../components/layout";
import axios from "axios";

const auCinema = ({data}) => {
    const film = data.results;
    console.log(data);
    var formatter = new Intl.DateTimeFormat("ru");
    console.log(formatter.format(film.release_date));

    const styles = {
        card: {
            width: "18rem"
        },
        rating: {
            width: `45%`
        },
        percentTop: {
            stroke: "#4dd4ac",
        },
        percentMedium: {
            stroke: "#fd7e14",
        },
        percentBad: {
            stroke: "#dc3545",
        }
    }
    console.log(data);
    return (
        <Layout>
            <div className="container">
                <h1 className="mt-5 mb-5">Dans les salles obscures</h1>
                <div className="row d-flex flex-wrap justify-content-center">
            {
                film.map(film => (
                    <div className="card mr-5 mb-5" style={styles.card}>
                        <img src={`//image.tmdb.org/t/p/w220_and_h330_face${film.poster_path}`} className="card-img-top" alt={film.title}/>
                        <svg backgroundColor="red" viewBox="0 0 75 75"  className="circle-svg">
  
                        <path className="around" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                        
                        {
                            film.vote_average * 10 >= 70 && 
                            <path style={styles.percentTop} className="percent" strokeDasharray={`${film.vote_average * 10}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                        }
                        {
                            (film.vote_average * 10 < 70 && film.vote_average * 10 >= 50) && 
                            <path style={styles.percentMedium} className="percent" strokeDasharray={`${film.vote_average * 10}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                        }
                        {
                            (film.vote_average * 10 < 50) && 
                            <path style={styles.percentBad} className="percent" strokeDasharray={`${film.vote_average * 10}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                        }
                        <text x="18" y="14" textAnchor="middle" dy="7">{`${film.vote_average * 10}%`}</text>
                        
                        </svg>
                        <div className="card-body">
                            <h5 className="card-title ml-3">{film.title}</h5>
                            
                            <span>{film.release_date}</span>
                            <p className="card-text">{film.overview.substr(0, 100)}...</p>   
                        </div>
                        
                        {/* <div className="m-2">
                            <ProgressBar striped variant="success" now={film.vote_average * 10} label={`${film.vote_average * 10}%`}/>
                            
                        </div> */}
                        <div className="card-footer text-muted text-center">
                                <a href="#" className="btn btn-primary w-100">Details</a>
                        </div>
                    </div>
                ))
            }
            </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps (context) {
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=649b8bcf752f8a1fdb3042fe6c5cf2c6&sort_by=popularity.desc&language=fr&region=FR";
    const url2 = "https://api.themoviedb.org/4/discover/movie?api_key=649b8bcf752f8a1fdb3042fe6c5cf2c6&primary_release_date.gte=2010-01-01&primary_release_date.lte=2020-12-31";
    const url3 = "https://api.themoviedb.org/4/list/6?api_key=649b8bcf752f8a1fdb3042fe6c5cf2c6";
    const { data } = await axios.get(url3, {
        headers: { Accept: "application/json" }, 
    });
    
    return {
        props: {
            data
        }
    }
}

export default auCinema;

// /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22