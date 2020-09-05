import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react"
import {fetchPosts} from "../store/actions/movie";
import Layout from "../components/Layout";
import Search from "../components/Search/Search";
import Suggestion from "../components/TopTen/Suggestion";
import axios from "axios";


export default function Home() {
    const dispatch = useDispatch()
    const [topTen, setTopTen] = useState([])
    const [editorChoices, setEditorChoices] = useState([])

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
            <Suggestion id={'top10'} title={'Top 10'} films={topTen}/>
            <Suggestion id={'editors'} title={'Editor\'s Choices'} films={editorChoices}/>
        </Layout>
    )
}
