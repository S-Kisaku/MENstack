import Head from 'next/head'

export default function Layout({children, title}){
    return (
        <html>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <body>
                <header></header>
                <main>
                    {children}
                </main>
                <footer></footer>
            </body>
        </html>
    )
}