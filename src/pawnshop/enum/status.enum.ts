export enum Status {
    /** the Pawnshop instance was cancelled by a participating pubkey before the exchange was completed */
    CANCELLED = "cancelled",

    /** the Pawnshop instance was closed by completing the exchange */
    CLOSED = "closed",

    /** the Pawnshop instance is currently active and in progress */
    OPEN = "open",
}