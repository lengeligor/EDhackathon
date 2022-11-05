import { Box, Grid } from '@chakra-ui/react'
import TransactionSetup from '../components/TransactionSetup'
import Cart from '../components/Cart'
import COLOR from '../../Theme'
import { useState } from 'react'

const Merchant = () => {
    /**
     * Sposoby platby
     *  vyplacanie mesacne v ciastkach
     *  vyplacanie naraz v urcity datum
     */

    const [total, setTotal] = useState(200)
    const [interestRate, setInterestRate] = useState()
    const totalWithInterest = total * (1 + interestRate / 100)

    return (
        <Grid templateColumns={'5fr 3fr'}>
            <Box height={'100vh'} w={'100%'} bg={COLOR.BLACK}>
                <TransactionSetup
                    total={total}
                    interestRate={interestRate}
                    setInterestRate={setInterestRate}
                />
            </Box>
            <Box height={'100vh'} w={'100%'} bg={COLOR.BLACK_BRIGHTER_2}>
                <Cart
                    total={total}
                    interestRate={interestRate}
                    totalWithInterest={totalWithInterest}
                />
            </Box>
        </Grid>
    )
}

export default Merchant
