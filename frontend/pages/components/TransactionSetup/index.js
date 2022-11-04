import React from 'react'
import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import styled from 'styled-components'
import { rem } from 'polished'
import { FaUserTimes, FaQuestionCircle } from 'react-icons/all'

const Header = () => (
    <Flex
        justifyContent={'center'}
        alignItems={'center'}
        w={'100%'}
        bg={'#2a2a2a'}
        height={rem(70)}
    >
        <Text color={'white'}>Acme shop inc</Text>
    </Flex>
)

const UserCardInfo = ({ title, value }) => {
    return (
        <Box>
            <Text fontSize={'20px'} color={'white'}>
                {value}
            </Text>
            <Text fontSize={'12px'} color={'#A7A7A7'}>
                {title}
            </Text>
        </Box>
    )
}

const UserCard = () => (
    <Flex flexDir={'column'} p={5} height={'100%'} bg={'#404040'}>
        <Box>
            <Text color={'white'} fontSize={'36px'}>
                Matej Gerek
            </Text>
            <Text color={'#A7A7A7'} fontSize={'12px'}>
                Svidník, Slovakia
            </Text>
        </Box>
        <Box my={5} w={'100%'} height={'1px'} bg={'#707070'} />
        <Grid mt={2} templateColumns={'1fr 1fr 1fr'}>
            <UserCardInfo title={'balance'} value={'34 ETH'} />
            <UserCardInfo title={'current loans'} value={13} />
            <UserCardInfo title={'something'} value={3} />
        </Grid>
    </Flex>
)

const ActionCard = ({ title, icon: Icon }) => (
    <Flex
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        p={5}
        height={'100%'}
        w={'100%'}
        bg={'#312425'}
    >
        <Icon color={'#E6616B'} size={'70px'} />
        <Text mt={2} color={'#F56464'}>
            {title}
        </Text>
    </Flex>
)

const TransactionSetup = () => {
    return (
        <Box>
            <Header />
            <Box p={5}>
                <Grid
                    height={rem(200)}
                    templateColumns={'2fr 1fr 1fr'}
                    columnGap={5}
                >
                    <UserCard />
                    <ActionCard title={'Cancel visit'} icon={FaUserTimes} />
                    <ActionCard title={'Call help'} icon={FaQuestionCircle} />
                </Grid>
                <Box my={5} w={'100%'} height={'1px'} bg={'#707070'} />
            </Box>
        </Box>
    )
}

export default TransactionSetup
