import { Box, Grid } from '@chakra-ui/react'
import styled from 'styled-components'
import TransactionSetup from '../components/TransactionSetup'
import Cart from '../components/Cart'
import COLOR from '../../Theme'

const Side = styled(Box)`
    height: 100vh;
`

const Merchant = () => {
    /**
     * Sposoby platby
     *  vyplacanie mesacne v ciastkach
     *  vyplacanie naraz v urcity datum
     */

    return (
        <Grid templateColumns={'5fr 3fr'}>
            <Box height={'100vh'} w={'100%'} bg={'blue'}>
                <TransactionSetup />
            </Box>
            <Box height={'100vh'} w={'100%'} bg={COLOR.BLACK_BRIGHTER_1}>
                <Cart />
            </Box>
        </Grid>
    )
}

export default Merchant
