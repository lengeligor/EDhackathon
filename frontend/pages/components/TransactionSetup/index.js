import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
    Box,
    Flex,
    Grid,
    FormLabel,
    Select,
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
import { addDays, addMonths, addWeeks, format } from 'date-fns'

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

const UserCard = ({
    user: { name = '', lastname = '', balance = '', ...rest } = {}
}) => (
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
                {name} {lastname}
            </Text>
            <Text color={COLOR.TEXT_LIGHT_GRAY} fontSize={'12px'}>
                Svidník, Slovakia
            </Text>
        </Box>
        <Box my={5} w={'100%'} height={'1px'} bg={COLOR.GRAY} />
        <Grid mt={2} templateColumns={'1fr 1fr 1fr'}>
            <UserCardInfo title={'balance'} value={balance + ' ETH'} />
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

const TransactionSetup = ({
    total,
    setInterestRate,
    setDueDate,
    dueDate,
    installment,
    setInstallment,
    period,
    setPeriod,
    user
}) => {
    const [selectedType, setSelectedType] = useState(PAYMENT_TYPE.INTERVAL)

    const onDateChange = (e) => {
        setDueDate(e.target.value)
    }

    useEffect(() => {
        if (selectedType === PAYMENT_TYPE.INTERVAL) {
            setDueDate(null)
        }

        if (selectedType === PAYMENT_TYPE.PAY_LATER) {
            setPeriod(null)
            setInstallment(null)
        }
        setInterestRate(null)
    }, [selectedType, setDueDate, setInterestRate])

    useEffect(() => {
        if (
            !!period &&
            !!installment &&
            selectedType === PAYMENT_TYPE.INTERVAL
        ) {
            setInterestRate(2)
        }
    }, [period, installment, selectedType, setInterestRate])

    useEffect(() => {
        if (!!dueDate && selectedType === PAYMENT_TYPE.PAY_LATER) {
            setInterestRate(3)
        }
    }, [dueDate, selectedType, setInterestRate])

    return (
        <Box>
            <Header />
            <Box p={5}>
                <Grid
                    height={rem(200)}
                    templateColumns={'2fr 1fr 1fr'}
                    columnGap={5}
                >
                    <UserCard user={user} />
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
                    <InstallementsForm
                        setDueDate={setDueDate}
                        total={total}
                        period={period}
                        setPeriod={setPeriod}
                        installment={installment}
                        setInstallment={setInstallment}
                    />
                ) : (
                    <PayLater setDate={onDateChange} date={dueDate} />
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
const StyledInput = styled(Input)`
    color: white;
`

const countDueDate = ({ total, installment, period }) => {
    const installmentCount = total / installment
    const today = new Date()
    if (period === 'weekly') {
        return addWeeks(today, installmentCount)
    }
    if (period === 'daily') {
        return addDays(today, installmentCount)
    }
    return addMonths(today, installmentCount)
}

const InstallementsForm = ({
    period,
    setPeriod,
    installment,
    setInstallment,
    total,
    setDueDate
}) => {
    const computedDate = countDueDate({ total, installment, period })
    const showResult = !!period && !!installment

    useEffect(() => {
        if (showResult) {
            setDueDate(format(computedDate, 'yyyy-MM-dd'))
        }
    }, [computedDate, setDueDate, showResult])
    return (
        <Box
            height={rem(265.4)}
            width={'100%'}
            mt={4}
            color={COLOR.TEXT_LIGHT_GRAY}
            bg={COLOR.BLACK_BRIGHTER_4}
            p={4}
            borderRadius={4}
        >
            <Flex
                flexDir={'row'}
                justify={'space-between'}
                alignItems={'center'}
                height={'75%'}
            >
                <Flex direction={'column'} w={'45%'}>
                    <StyledSelect
                        style={{
                            backgroundColor: '#404040',
                            color: COLOR.TEXT_WHITE
                        }}
                        onChange={(e) => setPeriod(e.target.value)}
                        value={period}
                        placeholder="Select period"
                    >
                        {PERIODS.map(({ value, title }) => (
                            <option
                                style={{
                                    backgroundColor: '#404040',
                                    color: COLOR.TEXT_WHITE
                                }}
                                key={value}
                                value={value}
                                background
                            >
                                {title}
                            </option>
                        ))}
                    </StyledSelect>
                    <StyledInput
                        placeholder={'Select installment'}
                        value={installment}
                        onChange={(e) => {
                            setInstallment(e.target.value)
                        }}
                        mt={5}
                        type="number"
                        color={COLOR.TEXT_WHITE}
                    />
                </Flex>
                {showResult && (
                    <Flex
                        direction={'column'}
                        w={'45%'}
                        height={'58%'}
                        justify={'space-between'}
                    >
                        <Flex
                            w={'100%'}
                            direction={'row'}
                            bg={COLOR.BLACK_BRIGHTER_1}
                            p={2}
                            borderRadius={'4px'}
                        >
                            <Text color={'white'} mr={4}>
                                Due date:
                            </Text>
                            <Text color={'white'}>
                                {format(computedDate, 'dd-MM-yyy')}
                            </Text>
                        </Flex>
                        <Flex
                            w={'100%'}
                            direction={'row'}
                            bg={COLOR.BLACK_BRIGHTER_1}
                            p={2}
                            borderRadius={'4px'}
                        >
                            <Text color={'white'} mr={4}>
                                Interest rate:{' '}
                            </Text>
                            <Text color={'white'}>2%</Text>
                        </Flex>
                    </Flex>
                )}
            </Flex>
        </Box>
    )
}

const PayLater = ({ setDate, date }) => {
    return (
        <Box
            height={rem(150)}
            width={'100%'}
            mt={4}
            color={COLOR.TEXT_LIGHT_GRAY}
            bg={COLOR.BLACK_BRIGHTER_4}
            p={4}
            borderRadius={4}
        >
            <Box>
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
            </Box>
        </Box>
    )
}

export default TransactionSetup
