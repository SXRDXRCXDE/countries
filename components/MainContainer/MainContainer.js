import Head from "next/head";
import Header from "../Header/Header";

const MainContainer = ({children,keyword,title}) => {
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png"/>
                <meta keywords={`${keyword}`}></meta>
                <title> {title} </title>

            </Head>
            <Header/>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;