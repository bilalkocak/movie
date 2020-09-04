import {useDispatch} from "react-redux";
import {useEffect} from "react"
import {fetchPosts} from "../store/actions/postAction";
import Layout from "../components/Layout";
import Search from "../components/Search/Search";


export default function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return (
        <Layout>
            <Search/>
        </Layout>
    )
}
