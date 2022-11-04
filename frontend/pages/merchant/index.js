import { Box, Grid } from '@chakra-ui/react'
import styled from 'styled-components'
import TransactionSetup from '../components/TransactionSetup'
import Cart from '../components/Cart'

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
            <Side w={'100%'} bg={'blue'}>
                <TransactionSetup />
            </Side>
            <Side w={'100%'} bg={'red'}>
                <Cart />
            </Side>
        </Grid>
    )
}

export default Merchant
