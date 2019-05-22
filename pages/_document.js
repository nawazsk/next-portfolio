import Document, {Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charset="utf-8" />
                    <meta name="description" content="A portfolio website" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0 user-scalable=no" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />       
                    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style global jsx>{`
                    body{
                        font-family: 'Roboto', sans-serif;
                    }
                `}</style>
            </html>
        )
    }
}