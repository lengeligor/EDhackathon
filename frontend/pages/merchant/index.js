import { Box, Grid } from '@chakra-ui/react'
import TransactionSetup from '../components/TransactionSetup'
import Cart from '../components/Cart'
import COLOR from '../../Theme'

const Merchant = () => {
    /**
     * Sposoby platby
     *  vyplacanie mesacne v ciastkach
     *  vyplacanie naraz v urcity datum
     */

    return (
        <Grid templateColumns={'5fr 3fr'}>
            <Box height={'100vh'} w={'100%'} bg={COLOR.BLACK}>
                <TransactionSetup />
            </Box>
            <Box height={'100vh'} w={'100%'} bg={COLOR.BLACK_BRIGHTER_2}>
                <Cart />
            </Box>
        </Grid>
    )
}

export default Merchant
