export class TokenBalanceResult {
    /** whether the command executed successfully */
    result!: string;

    /** taking the token contract's EVAL code as a modifier, this is the CC address from the pubkey of the user */
    CCaddress!: string;

    /** the txid that identifies the token */
    tokenid!: string;

    /** the balance of the address that corresponds to the pubkey */
    balance!: number;
}