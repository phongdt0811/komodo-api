export class Balance {
    /** the current confirmed balance in satoshis */
    balance!: number;
    /** the total confirmed number of satoshis received (including change) */
    received!: number;
}