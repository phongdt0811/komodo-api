export class Token {
    /** whether the command executed successfully */
    result!: string;

    /** the identifying txid for the token id */
    tokenid!: string;

    /** the identifying pubkey of the token creator */
    owner!: string;

    /** the name of the token */
    name!: string;

    /** the total supply of the token */
    supply!: number;

    /** the token description provided by the owner at token creation */
    description!: string;

    confirmations?: number;
    isValid?: boolean;
}