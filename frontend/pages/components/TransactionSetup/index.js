import React, { useState } from 'react'

import styled from 'styled-components'
import {
    Box,
    Flex,
  Grid,
    FormControl,
    FormLabel,
  Select,
    Grid,
    Input,
    Text
} from '@chakra-ui/react'

import { rem } from 'polished'
import {
    FaUserTimes,
    FaQuestionCircle,
    FaAngleDoubleRight
} from 'react-icons/fa'
import COLOR from '../../../Theme'

const Header = () => (
    <Flex
        justifyContent={'center'}
        alignItems={'center'}
        w={'100%'}
        height={rem(50)}
        bg={COLOR.BLACK_BRIGHTER_1}
        color={COLOR.TEXT_WHITE}
    >
        <Text color={COLOR.TEXT_WHITE}>Acme shop inc</Text>
    </Flex>
)

const UserCardInfo = ({ title, value }) => {
    return (
        <Box>
            <Text fontSize={'20px'} color={COLOR.TEXT_WHITE}>
                {value}
            </Text>
            <Text fontSize={'12px'} color={COLOR.TEXT_LIGHT_GRAY}>
                {title}
            </Text>
        </Box>
    )
}

const UserCard = () => (
    <Flex
        flexDir={'column'}
        p={5}
        height={'100%'}
        bg={COLOR.BLACK_BRIGHTER_4}
        borderRadius={'4px'}
    >
        <Box>
            <Text
                letterSpacing={1.5}
                color={COLOR.TEXT_WHITE}
                fontSize={'36px'}
            >
                Matej Gerek
            </Text>
            <Text color={COLOR.TEXT_LIGHT_GRAY} fontSize={'12px'}>
                Svidník, Slovakia
            </Text>
        </Box>
        <Box my={5} w={'100%'} height={'1px'} bg={COLOR.GRAY} />
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
        bg={COLOR.DARK_PINK}
        borderRadius={'4px'}
    >
        <Icon color={COLOR.LIGHT_PINK} size={'70px'} />
        <Text letterSpacing={0.2} mt={2} color={COLOR.PINK}>
            {title}
        </Text>
    </Flex>
)

const PaymentTypeCard = ({
    title,
    description,
    icon: Icon,
    isSelected = false,
    onClick
}) => {
    const textColor = isSelected ? COLOR.BLACK : COLOR.TEXT_WHITE
    return (
        <Flex
            justifyContent={'space-between'}
            flexDir={'column'}
            onClick={onClick}
            p={5}
            borderRadius={'4px'}
            bg={isSelected ? COLOR.YELLOW : COLOR.BLACK_BRIGHTER_4}
            height={'100%'}
        >
            <Flex alignItems={'center'}>
                <Icon color={textColor} size={rem(30)} />
                <Text
                    letterSpacing={1.5}
                    color={textColor}
                    ml={3}
                    fontSize={25}
                    fontWeight={'900'}
                >
                    {title}
                </Text>
            </Flex>
            <Text color={textColor}>{description}</Text>
        </Flex>
    )
}

export const PAYMENT_TYPE = {
    INTERVAL: 'INTERVAL',
    PAY_LATER: 'PAY_LATER'
}

const TransactionSetup = () => {
    const [selectedType, setSelectedType] = useState(PAYMENT_TYPE.INTERVAL)
    const [selectedDate, setSelectedDate] = useState(new Date())

    const onDateChange = (e) => {
        console.log(e.target.value)
        setSelectedDate(e.target.value)
    }

    const [period, setPeriod] = useState()
    const [price, setPrice] = useState()
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
                <Box my={5} w={'100%'} height={'1px'} bg={COLOR.GRAY} />
                <Grid
                    height={rem(150)}
                    templateColumns={'1fr 1fr'}
                    columnGap={5}
                >
                    <PaymentTypeCard
                        title={'Pay by installments'}
                        description={'Buy now at setup your plan below.'}
                        isSelected={selectedType === PAYMENT_TYPE.INTERVAL}
                        onClick={() => {
                            setSelectedType(PAYMENT_TYPE.INTERVAL)
                        }}
                        icon={FaAngleDoubleRight}
                    />
                    <PaymentTypeCard
                        title={'Pay later'}
                        description={
                            "Buy now, pay later at once. Don't worry, we will charge you."
                        }
                        isSelected={selectedType === PAYMENT_TYPE.PAY_LATER}
                        onClick={() => {
                            setSelectedType(PAYMENT_TYPE.PAY_LATER)
                        }}
                        icon={FaAngleDoubleRight}
                    />
                </Grid>
                {selectedType === PAYMENT_TYPE.INTERVAL ? (
                    <InstallementsForm period={period} setPeriod={setPeriod} />
                ) : (
                    <PayLater setDate={onDateChange} date={selectedDate} />
                )}
            </Box>
        </Box>
    )
}

const PERIODS = [
    {
        title: 'Daily',
        value: 'daily'
    },

    {
        title: 'Weekly',
        value: 'weekly'
    },
    {
        title: 'Monthly',
        value: 'monthly'
    }
]

const StyledSelect = styled(Select)`
    color: white;
`

const InstallementsForm = ({ period, setPeriod, price, setPrice }) => {
    return (
        <Flex mt={5} flexDir={'column'}>
            <StyledSelect
                onChange={(e) => setPeriod(e.target.value)}
                value={period}
                placeholder="StyledSelect Period"
            >
                {PERIODS.map(({ value, title }) => (
                    <option key={value} value={value}>
                        {title}
                    </option>
                ))}
            </StyledSelect>
            <Input
                value={price}
                setValue={(e) => {
                    setPrice(e.target.value)
                }}
                color={'white'}
                mt={5}
                type="number"
            />
            {/*jak dlho*/}
            {/*urok*/}
        </Flex>
    )
}

const PayLater = ({ setDate, date }) => {
    return (
        <Box
            height={rem(150)}
            width={'50%'}
            mt={4}
            color={COLOR.TEXT_LIGHT_GRAY}
            bg={COLOR.BLACK_BRIGHTER_4}
            p={4}
            borderRadius={4}
        >
            <FormControl variant="floating" id="first-name">
                <FormLabel color={COLOR.TEXT_LIGHT_GRAY} fontSize={'14px'}>
                    Select payment date
                </FormLabel>
                <Input
                    width={'75%'}
                    size="md"
                    type="date"
                    color={COLOR.TEXT_WHITE}
                    onChange={setDate}
                    value={date}
                />
            </FormControl>
        </Box>
    )
}

export default TransactionSetup
