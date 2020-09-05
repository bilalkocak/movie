import '../styles/globals.css'
import {Provider} from 'react-redux'
import store from '../store/store'
import '../components/Search/Search.scss'
import '../components/Navbar/Navbar.scss'
import '../components/MovieCard/MovieCard.scss'
import '../components/TopTen/Suggestion.scss'
import '../styles/common.scss'
import '../components/Common/RatingBar/RatingBar.scss'

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
