import React from 'react'
import COLOR from '../../../Theme'
import { Box, Center, Flex, Text, Button } from '@chakra-ui/react'

const Title = () => {
    return (
        <Flex color={COLOR.TEXT_WHITE} align={'center'} mt={4}>
            <Center w="100%">
                <Box w="90%" p="2">
                    <Text
                        align={'center'}
                        fontSize={'14px'}
                        color={COLOR.TEXT_WHITE}
                    >
                        Shopping Cart
                    </Text>
                </Box>
            </Center>
        </Flex>
    )
}

const CartItem = ({ title, subtitle, price }) => {
    return (
        <Flex color={COLOR.TEXT_WHITE} align={'center'} mt={4}>
            <Center w="100%">
                <Box
                    w="90%"
                    p="2"
                    borderRadius={'4px'}
                    bg={COLOR.BLACK_BRIGHTER_3}
                >
                    <Flex justify={'space-between'} align={'center'}>
                        <Box>
                            <Text fontSize={'14px'}>{title}</Text>
                            <Text
                                fontSize={'10px'}
                                color={COLOR.TEXT_LIGHT_GRAY}
                            >
                                {subtitle}
                            </Text>
                        </Box>
                        <Text>{price.toFixed(2)}</Text>
                    </Flex>
                </Box>
            </Center>
        </Flex>
    )
}

const Total = ({ value }) => {
    return (
        <Flex color="white" align={'center'} mt={4}>
            <Center w="100%">
                <Box
                    w="90%"
                    p={'2'}
                    borderRadius={'4px'}
                    border={'1px'}
                    borderColor={COLOR.TEXT_LIGHT_GRAY}
                    bg={COLOR.BLACK_BRIGHTER_3}
                >
                    <Text fontSize={'10px'} color={COLOR.TEXT_LIGHT_GRAY}>
                        Total
                    </Text>
                    <Text fontSize={'14px'}>{value.toFixed(2)}</Text>
                </Box>
            </Center>
        </Flex>
    )
}

const PayButton = () => {
    return (
        <Flex color="white" align={'center'} mt={4} mb={5}>
            <Center w="100%">
                <Button
                    w={'90%'}
                    fontSize={'14px'}
                    bg={COLOR.YELLOW}
                    color={COLOR.BLACK}
                    borderRadius={'4px'}
                    letterSpacing={'1px'}
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
            <Box>
                <Title></Title>
                <CartItem
                    title={'Coca-Cola for 1 point'}
                    subtitle={'One coupon, one position for check'}
                    price={20}
                ></CartItem>
                <CartItem
                    title={'Coca-Cola for 1 point'}
                    subtitle={'One coupon, one position for check'}
                    price={30}
                ></CartItem>
                <CartItem
                    title={'Coca-Cola for 1 point'}
                    subtitle={'One coupon, one position for check'}
                    price={20}
                ></CartItem>
                <CartItem
                    title={'Coca-Cola for 1 point'}
                    subtitle={'One coupon, one position for check'}
                    price={20}
                ></CartItem>
                <CartItem
                    title={'Coca-Cola for 1 point'}
                    subtitle={'One coupon, one position for check'}
                    price={20}
                ></CartItem>
                <CartItem
                    title={'Coca-Cola for 1 point'}
                    subtitle={'One coupon, one position for check'}
                    price={2}
                ></CartItem>
                <CartItem
                    title={'Coca-Cola for 1 point'}
                    subtitle={'One coupon, one position for check'}
                    price={2}
                ></CartItem>
            </Box>
            <Box>
                <Total value={200}></Total>
                <PayButton></PayButton>
            </Box>
        </Flex>
    )
}

export default Cart
