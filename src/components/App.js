import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Movies from './Movies'
import MovieDays from './MovieDays'
import MovieSession from './MovieSession'
import GlobalStyle from '../styles/style'

/* perguntar pq não tá funcionando styled components */

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/movie/:movieid" element={<MovieDays />} />
                    <Route path="/session/:showtimeid" element={<MovieSession />} />
                </Routes>
            </BrowserRouter>
        </>
        
    )
}

function Header() {
    return (
        <Link to='/'>
        <Container>
            <h1>CINEFLEX</h1>
        </Container>
        </Link>
    )
}

const Container = styled.div`
    background-color: var(--back-header-color);
    color: var(--primary-color);
    height: 67px;
    font-size: 34px;
    text-align: center;
    line-height: 67px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    font-weight: 900;
`



