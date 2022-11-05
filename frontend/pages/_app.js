import '../styles/globals.css'
import { Roboto } from '@next/font/google'
import { ChakraProvider } from '@chakra-ui/react'

const roboto = Roboto({
    weight: '400'
})

import mqtt from 'mqtt'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
    const [cardId, setCardId] = useState()

    useEffect(() => {
        const client = mqtt.connect('tcp://broker.hivemq.com:8000/mqtt', {})

        client.on('connect', function () {
            client.subscribe('hackathon/kajmmi/rfid/pay')
        })

        client.on('message', function (topic, message) {
            // message is Buffer
            setCardId(message.toString())
            console.log(message.toString())
            //   client.end();
        })
    }, [])

    return (
        <ChakraProvider>
            <main className={roboto.className}>
                {cardId ? <Component {...pageProps} /> : 'no card id'}
            </main>
        </ChakraProvider>
    )
}

export default MyApp
