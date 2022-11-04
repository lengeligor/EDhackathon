import '../styles/globals.css'
import { Roboto } from '@next/font/google'
import { ChakraProvider } from '@chakra-ui/react'

const roboto = Roboto({
    weight: '400'
})

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <main className={roboto.className}>
                <Component {...pageProps} />
            </main>
        </ChakraProvider>
    )
}

export default MyApp
