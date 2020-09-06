import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react"
import Layout from "../components/Layout";
import Search from "../components/Search/Search";
import Suggestion from "../components/TopTen/Suggestion";
import axios from "axios";
import Result from "../components/Search/Result/Result";


export default function Home() {
    const [topTen, setTopTen] = useState([])
    const [editorChoices, setEditorChoices] = useState([])
    const movies = useSelector(state => state.movie.movies)

    function getTopFilms() {
        axios.get('/api/editorsChoices').then(res => setEditorChoices(res.data.films)).catch(error => console.log(error))
    }

    function getEditorsChoices() {
        axios.get('/api/topFilms').then(res => setTopTen(res.data.films)).catch(error => console.log(error))
    }

    useEffect(() => {
        getTopFilms()
        getEditorsChoices()
    }, [])
    return (
        <Layout className={'index'}>
            <Search/>
            {
                movies.length > 0 ?
                    <Result id={'search'} title={'Search Results'} movies={movies}/>
                    :
                    <>
                        <Suggestion id={'top10'} title={'Top 10'} films={topTen}/>
                        <Suggestion id={'editors'} title={'Editor\'s Choices'} films={editorChoices}/>
                    </>
            }

        </Layout>
    )
}
