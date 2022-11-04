import classes from './style.module.css'

const Merchant = () => {
    /**
     * Sposoby platby
     *  vyplacanie mesacne v ciastkach
     *  vyplacanie naraz v urcity datum
     */

    return (
        <div className={classes.dashboard}>
            <div className={classes['dashboard-payments']}>Test</div>

            <div className={classes['dashboard-cart']}>Test 2</div>
        </div>
    )
}

export default Merchant
