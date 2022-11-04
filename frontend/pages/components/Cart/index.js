import React from 'react'
import COLOR from '../../../Theme'
import { Box, Center, Flex, Text, Button, Spacer } from '@chakra-ui/react'

const CartItem = () => {
    return (
        <Flex color="white" align={'center'} mt={4}>
            <Center w="100%">
                <Box
                    w="90%"
                    p="2"
                    borderRadius={'4px'}
                    bg={COLOR.BLACK_BRIGHTER_2}
                >
                    <Text fontSize={'14px'}>Coca-Cola for 1 point</Text>
                    <Text fontSize={'10px'} color={'#A7A7A7'}>
                        One coupon, one position for check
                    </Text>
                </Box>
            </Center>
        </Flex>
    )
}

const Total = () => {
    return (
        <Flex color="white" align={'center'} mt={4}>
            <Center w="100%">
                <Box
                    w="90%"
                    p={'2'}
                    borderRadius={'4px'}
                    border={'1px'}
                    borderColor={COLOR.LIGHT_GRAY}
                    bg={COLOR.BLACK_BRIGHTER_2}
                >
                    <Text fontSize={'10px'} color={'#A7A7A7'}>
                        Total
                    </Text>
                    <Text fontSize={'14px'}>200.00</Text>
                </Box>
            </Center>
        </Flex>
    )
}

const PayButton = () => {
    return (
        <Flex color="white" align={'center'} mt={4}>
            <Center w="100%">
                <Button
                    w={'90%'}
                    fontSize={'14px'}
                    bg={COLOR.YELLOW}
                    color={COLOR.BLACK}
                    borderRadius={'4px'}
                >
                    Pay
                </Button>
            </Center>
        </Flex>
    )
}

const Cart = () => {
    return (
        <Flex
            direction={'column'}
            justifyContent={'space-between'}
            height={'100vh'}
        >
            <CartItem></CartItem>
            <Box>
                <Total></Total>
                <PayButton></PayButton>
            </Box>
        </Flex>
    )
}

export default Cart
