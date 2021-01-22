export class Flags {
    /** this parameter determines whether the instance requires the deposit from the specified agreement_txid to be unlocked before completing the exchange */
    require_deposit_unlock?: boolean;

    /** this parameter determines whether loan functionality is disabled for this instance (NOTE: in Pawnshop v1 this flag is always true) */
    disable_loans?: boolean;

    /** this parameter determines whether direct trading functionality (without initiating a loan first) is disabled for this instance */
    disable_trading?: boolean
}