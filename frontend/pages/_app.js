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
            if (!cardId) {
                console.log(message.toString())
                setCardId(message.toString())
            }
            //   client.end();
        })
    }, [])

    const URL = 'http://localhost:8083/ed/api/'
    const [user, setUser] = useState()

    useEffect(() => {
        console.log(cardId + ' karta')
        if (cardId) {
            fetch(URL + 'customer/' + cardId)
                .then((r) => r.json())
                .then((user) => {
                    setUser(user)
                })
        }
    }, [cardId])

    return (
        <ChakraProvider>
            <main className={roboto.className}>
                {user ? <Component user={user} {...pageProps} /> : 'no card id'}
            </main>
        </ChakraProvider>
    )
}

export default MyApp
