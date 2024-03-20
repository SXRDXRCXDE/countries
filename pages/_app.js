// `pages/_app.js`
import '../styles/global.css';
import {Providers} from "../GlobalRedux/provider";

export default function App({ Component, pageProps }) {
    return <Providers>
        <Component {...pageProps} />
    </Providers>;
}