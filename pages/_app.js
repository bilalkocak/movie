import '../styles/globals.css'
import {Provider} from 'react-redux'
import store from '../store/store'
import '../components/Search/Search.scss'
import '../components/Navbar/Navbar.scss'

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
