import React from 'react'
import COLOR from '../../../Theme'
import {
    Box,
    Center,
    Flex,
    Text,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react'

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
                        <Text>{'$ ' + price.toFixed(2)}</Text>
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
                    <Text fontSize={'14px'}>{'$ ' + value.toFixed(2)}</Text>
                </Box>
            </Center>
        </Flex>
    )
}

const InterestRate = ({ value }) => {
    return (
        <Flex color="white" align={'center'} mt={4}>
            <Center w="100%">
                <Box w="90%" borderColor={COLOR.TEXT_LIGHT_GRAY}>
                    <Text fontSize={'14px'} color={COLOR.TEXT_WHITE}>
                        {'Interest rate: ' + value + '%'}
                    </Text>
                </Box>
            </Center>
        </Flex>
    )
}

const PayButton = ({ onOpen }) => {
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
                    onClick={onOpen}
                >
                    Checkout
                </Button>
            </Center>
        </Flex>
    )
}

const Cart = ({
    total,
    interestRate,
    totalWithInterest,
    sendTransaction,
    goHome
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex
            direction={'column'}
            justifyContent={'space-between'}
            height={'100vh'}
        >
            <Box>
                <Title></Title>
                <CartItem
                    title={'Wooden Box'}
                    subtitle={'One coupon, one position for check'}
                    price={70}
                ></CartItem>
                <CartItem
                    title={'bread'}
                    subtitle={'One coupon, one position for check'}
                    price={2.5}
                ></CartItem>
                <CartItem
                    title={'Chicken breasts'}
                    subtitle={'One coupon, one position for check'}
                    price={7}
                ></CartItem>
                <CartItem
                    title={'Coca-Cola 1,5l'}
                    subtitle={'One coupon, one position for check'}
                    price={2}
                ></CartItem>
                <CartItem
                    title={'Headphones'}
                    subtitle={'One coupon, one position for check'}
                    price={28.5}
                ></CartItem>
                <CartItem
                    title={'Wooden desk'}
                    subtitle={'One coupon, one position for check'}
                    price={90}
                ></CartItem>
            </Box>
            <Box>
                <Total value={total}></Total>
                {!!interestRate && (
                    <>
                        <InterestRate value={interestRate}></InterestRate>
                        <Total value={totalWithInterest}></Total>
                    </>
                )}
                <PayButton onOpen={onOpen}></PayButton>
                <p onClick={sendTransaction}>test</p>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={COLOR.YELLOW}>
                    <Flex align={'center'} direction={'column'}>
                        <ModalHeader
                            textAlign={'center'}
                            borderBottom={'1px'}
                            borderBottomStyle={'dashed'}
                            borderBottomColor={'#c3b431'}
                            borderBottomWidth={'2px'}
                            w={'100%'}
                            mb={'4'}
                        >
                            <Text>Your order</Text>

                            <Text fontWeight={'bold'} fontSize={'26px'}>
                                {'$ ' + totalWithInterest.toFixed(2)}
                            </Text>
                        </ModalHeader>
                        <ModalBody w={'90%'}>
                            <Box mb={'4'}>
                                <Text>User</Text>
                                <Text fontWeight={'bold'}>{'USERNAME'}</Text>
                            </Box>
                            <Box
                                bg={'#e6d432'}
                                borderRadius={'4px'}
                                p={'4'}
                                mb={'4'}
                            >
                                <Flex justify={'space-between'} mb={'2'}>
                                    <Text fontSize={'16px'} color={'#57542a'}>
                                        Total Check:
                                    </Text>
                                    <Text
                                        color={COLOR.BLACK}
                                        fontWeight={'bold'}
                                    >
                                        {' '}
                                        {'$ ' + total.toFixed(2)}
                                    </Text>
                                </Flex>
                                <Flex justify={'space-between'}>
                                    <Text fontSize={'16px'} color={'#57542a'}>
                                        Interest Rate:
                                    </Text>
                                    <Text
                                        color={COLOR.BLACK}
                                        fontWeight={'bold'}
                                    >
                                        {interestRate + '%'}
                                    </Text>
                                </Flex>
                                <Box
                                    my={3}
                                    w={'100%'}
                                    height={'1px'}
                                    bg={'#c3b431'}
                                />
                                <Flex justify={'space-between'}>
                                    <Text fontSize={'16px'} color={'#57542a'}>
                                        Total with Interest:
                                    </Text>
                                    <Text
                                        color={COLOR.BLACK}
                                        fontWeight={'bold'}
                                    >
                                        {'$ ' + totalWithInterest.toFixed(2)}
                                    </Text>
                                </Flex>
                            </Box>
                        </ModalBody>
                    </Flex>

                    <ModalCloseButton />

                    <ModalFooter>
                        <Button
                            bg={COLOR.BLACK_BRIGHTER_3}
                            // border={'1px'}
                            color={COLOR.YELLOW}
                            fontWeight={'bold'}
                            mr={3}
                            onClick={async () => {
                                const response = await sendTransaction()
                                onClose()
                                goHome()
                            }}
                            _hover={{ bg: COLOR.BLACK_BRIGHTER_1 }}
                        >
                            Pay now
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}

export default Cart
