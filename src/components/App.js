import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import Movies from './Movies'
import MovieDays from './Showtimes'
import Seats from './Seats'
import GlobalStyle from '../styles/style'
import SucessScreen from './SucessScreen'
import { useState} from 'react'


export default function App() {
    
    const [purchases,setPurchases] = useState([])
    const [selectSeat, setSelectSeat] = useState([])
    const [movies, setMovies] = useState([])
    
    

    console.log(movies)

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Movies movies={movies} setMovies={setMovies}/>} />
                    <Route path="/sessoes/:movieid" element={<MovieDays setMovies={setMovies} movies={movies}/>} />
                    <Route path="/assentos/:showtimeid" element={<Seats purchases={purchases} setPurchases={setPurchases} selectSeat={selectSeat} setSelectSeat={setSelectSeat} setMovies={setMovies} movies={movies}/>} />
                    <Route path="/sucess" element={<SucessScreen purchases={purchases} selectSeat={selectSeat} movies={movies}/>} />
                </Routes>
            </BrowserRouter>
        </>
        
    )
}

function Header() {

        const route = useLocation()
        const navigate = useNavigate()


    return (
        
        <Container>
            {route.pathname  !== '/' ? <ion-icon visibility='hidden' onClick={() => navigate(-1)} name="arrow-undo"></ion-icon> : null}
            <Link to='/'>
            <h1>CINEFLEX</h1>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0; left: 0;
    background-color: var(--back-header-color); 
    color: var(--primary-color);  
    height: 67px;
    width: 100%;
    font-size: 34px;
    text-align: center;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        width: 90%;
    }

    h1{
        width: 90%;
        color: var(--primary-color);
        
    }

    ion-icon{
        visibility: ${props => props.visibility};
    }

`



