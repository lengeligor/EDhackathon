import '../styles/globals.css'
import { Roboto } from '@next/font/google'
import { ChakraProvider, Flex, Text } from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa'
const roboto = Roboto({
    weight: '400'
})

import mqtt from 'mqtt'
import React, { useEffect, useState } from 'react'
import COLOR from '../Theme'

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
            client.subscribe('hackathon/kajmmi/eth-price')
        })

        client.on('message', function (topic, message) {
            if (topic === 'hackathon/kajmmi/rfid/pay') {
                setCardId(message.toString())
            }
            if (topic === 'hackathon/kajmmi/eth-price') {
                // add set state
                console.log(message.toString())
            }
            //   client.end();
        })
    }, [])

    const URL = 'http://localhost:8083/ed/api/'
    const [user, setUser] = useState()

    useEffect(() => {
        if (false) {
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
                    <Component setUser={setUser} user={user} {...pageProps} />
                ) : (
                    <WelcomeBox></WelcomeBox>
                )}
                {/*<Component user={user} {...pageProps} />*/}
            </main>
        </ChakraProvider>
    )
}

export default MyApp
