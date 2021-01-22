export class Transaction {
    /** whether the command executed successfully */
    result!: string;

    /**  a raw transaction in hex-encoded format; you must broadcast this transaction to complete the command */
    hex!: string;

    /** transaction fee */
    fee?: number;
}