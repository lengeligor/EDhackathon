import '../styles/globals.css'
import { Roboto } from '@next/font/google'
import { Box, ChakraProvider, Flex, Text } from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa'
const roboto = Roboto({
    weight: '400'
})

import mqtt from 'mqtt'
import React, { useEffect, useState } from 'react'
import COLOR from '../Theme'
import { rem } from 'polished'

const WelcomeBox = () => {
    return (
        <Flex
            align={'center'}
            justify={'center'}
            height={'100vh'}
            bg={COLOR.BLACK_BRIGHTER_1}
            color={COLOR.BLACK_BRIGHTER_1}
        >
            <Flex
                bg={'#e6d432'}
                direction={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                p={12}
                borderRadius={'4px'}
            >
                <Text fontSize={'40px'} fontWeight={'bold'} mb={4}>
                    Please scan your shopping card
                </Text>
                <FaShoppingCart fontSize={'64px'} />
            </Flex>
        </Flex>
    )
}

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
                {user ? (
                    <Component {...pageProps} />
                ) : (
                    <WelcomeBox></WelcomeBox>
                )}
            </main>
        </ChakraProvider>
    )
}

export default MyApp
