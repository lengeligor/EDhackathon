import { Box, Grid } from '@chakra-ui/react'
import styled from 'styled-components'
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
            <Box height={'100vh'} w={'100%'} bg={'#050505'}>
                <TransactionSetup />
            </Box>
            <Box height={'100vh'} w={'100%'} bg={'red'}>
                <Cart />
            </Box>
        </Grid>
    )
}

export default Merchant
