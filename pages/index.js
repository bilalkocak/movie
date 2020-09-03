import {useDispatch} from "react-redux";
import {useEffect} from "react"
import {fetchPosts} from "../store/actions/postAction";

export default function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return (
        <div>
            {process.env.API_KEY}
        </div>
    )
}
