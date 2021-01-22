export enum Flags {
    /**  (1 or 0b00000001): Pawnshop instance will require usage of an agreement deposit unlock transaction before completion of the exchange. Requires valid agreementtxid defined. */
    PTF_REQUIREUNLOCK = 1,
    /** (2 or 0b00000010): any loan-related RPCs like pawnshopborrow (not implemented yet) are disabled. */
    PTF_NOLOAN = 2,
    /** (4 or 0b00000100): disables the usage of the pawnshopexchange RPC before a loan is initiated. */
    PTF_NOTRADE = 4
}

export class CreatePawnshopRequest {
    /** name of the Pawnshop instance. (max 32 characters) */
    name!: string;

    /** pubkey of the coin provider for this instance. The special mypk keyword can be used to pass the pubkey used to launch the Komodo daemon to this parameter */
    coin_supplier!: string;

    /** pubkey of the token provider for this instance. The special mypk keyword can be used to pass the pubkey used to launch the Komodo daemon to this parameter */
    token_supplier!: string;

    /** the amount of coins that will be required for the exchange */
    numcoins!: number;

    /** token ID of the tokens being exchanged */
    tokenid!: string;

    /** the amount of tokens that will be required for the exchange */
    numtokens!: number;

    /** optional flags for altering behavior & permissions for this Pawnshop instance. Multiple flags can be set by adding their respective numbers together */
    flags?: Flags;

    /** transaction ID of an agreement in the blockchain that shares at least one member pubkey with the Pawnshop instance. If set, the Pawnshop instance will be linked as a settlement to the agreement specified here. */
    agreementtxid?: string
}