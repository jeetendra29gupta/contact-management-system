import React from 'react';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                {/* Add the favicon & css file*/}
                <link rel="shortcut icon" href="image/user.png" />
                <title>My Next Js App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="css/w3.css" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
export default App;