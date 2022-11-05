import { Box, Grid } from '@chakra-ui/react'
import TransactionSetup from '../components/TransactionSetup'
import Cart from '../components/Cart'
import COLOR from '../../Theme'
import { useState } from 'react'

const URL = 'http://localhost:8083/ed/api/'

const Merchant = () => {
    /**
     * Sposoby platby
     *  vyplacanie mesacne v ciastkach
     *  vyplacanie naraz v urcity datum
     */

    const [total, setTotal] = useState(200)
    const [interestRate, setInterestRate] = useState()
    const totalWithInterest = total * (1 + interestRate / 100)
    const [dueDate, setDueDate] = useState()
    const [installment, setInstallment] = useState()
    const [period, setPeriod] = useState()

    const sendTransaction = async () => {
        const body = {
            totalAmount: total,
            dueDate,
            interest: interestRate,
            totalPayments: totalWithInterest / installment,
            payment: installment,
            customer: {
                id: 1
            }
        }

        const response = await fetch(URL + 'transaction/create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        console.log(await response.json())
    }

    return (
        <Grid templateColumns={'5fr 3fr'}>
            <Box height={'100vh'} w={'100%'} bg={COLOR.BLACK}>
                <TransactionSetup
                    setDueDate={setDueDate}
                    dueDate={dueDate}
                    total={total}
                    interestRate={interestRate}
                    setInterestRate={setInterestRate}
                    installment={installment}
                    setInstallment={setInstallment}
                    setPeriod={setPeriod}
                    period={period}
                />
            </Box>
            <Box height={'100vh'} w={'100%'} bg={COLOR.BLACK_BRIGHTER_2}>
                <Cart
                    sendTransaction={sendTransaction}
                    total={total}
                    interestRate={interestRate}
                    totalWithInterest={totalWithInterest}
                />
            </Box>
        </Grid>
    )
}

export default Merchant
