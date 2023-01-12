import { ColorModeScript } from "@chakra-ui/react"
import { useEffect } from 'react'
import { Html, Head, Main, NextScript } from "next/document"

function MyDocument () {

    handleState = () => {
        window.splitbee.track("Button Click")
    }

    useEffect(() => {
        window.addEventListener('load', handleState)
        return () => {
            window.removeEventListener('load', handleState)
        }
    })

    return (
        <>
        <Html lang="en">   
            <Head>
                <script async src="https://cdn.splitbee.io/sb.js"></script>
            </Head>
            <body>
                <ColorModeScript />
                <Main />
                <NextScript />
            </body>
        </Html>
        </>
    )
}

export default MyDocument