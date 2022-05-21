import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/reset.css'
import '../styles/style.css'

/* perguntar pq não tá funcionando styled components */

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/movie/:movieid" element={<Movie />} />
            </Routes>
        </BrowserRouter>
    )
}

function Header() {
    return (
        <header>
            <h1>CINEFLEX</h1>
        </header>
    )
}

function Movies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promisse.then(response => { setMovies(response.data) })
    }, [])
    console.log(movies)

    return (

        <main>
            <h5>Selecione o filme</h5>
            <ul>
                {movies.map((movie) =>
                    <li key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <img src={movie.posterURL} alt={movie.title} />
                        </Link>
                    </li>)}

            </ul>
        </main>
    )
}

function Movie() {

    const { movieid } = useParams();
    const [movie, setMovie] = useState({})
    const [days, setDays] = useState([])

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieid}/showtimes`)
        promisse.then(response => { setMovie(response.data); setDays(response.data.days) })
    }, [])
    console.log(days)
    return (
        <>
            <h5>Selecione o horário</h5>
            <ul>
                {days.map((day) =>
                    <li key={day.id}>
                        <p>{day.weekday} - {day.date}</p>
                        <div className='btns'>
                        {(day.showtimes).map((showtime) =>  
                            <button key={showtime.id}>
                                {showtime.name}
                            </button>
                            )}
                        </div>
                    </li>)}
            </ul>

        </>
    )
}




