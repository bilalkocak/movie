import '../styles/globals.css'
import {Provider} from 'react-redux'
import store from '../store/store'
import '../components/Search/Search.scss'
import '../components/Navbar/Navbar.scss'
import '../components/MovieCard/MovieCard.scss'
import '../components/TopTen/Suggestion.scss'
import '../components/Common/Button/Button.scss'
import '../components/Common/RatingBar/RatingBar.scss'
import '../components/MovieDetail/MovieDetail.scss'
import '../components/MovieDetail/Crew/Crew.scss'

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
