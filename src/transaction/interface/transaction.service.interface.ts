export interface ITransactionService {
    /**
     * The method submits raw transaction (serialized, hex-encoded) to local nodes and the network.
     * @param txHex the hex string of the raw transaction
     */
    sendRawTransaction(txHex: string): Promise<string>;

    /**
     * The method returns the raw transaction data.
     * If verbose=0, the method returns a string that is serialized, hex-encoded data for transaction_id. If verbose is non-zero, the method returns an object with information about transaction_id.
     * @param txid the transaction id
     * @param verbose if 0, the method returns a string in hex; otherwise, it returns a json object
     */
    getRawTransaction(txid: string, verbose?: number & 0 | 1): Promise<any>;

    /**
     * The method returns a json object representing the serialized, hex-encoded transaction.
     * 
     * @param txHex the transaction hex string
     */
    decodeRawTransaction(txHex: string): Promise<any>;

    /**
     * The method returns fee of raw transaction
     * @param txHex the transaction hex string
     */
    caculatedFee(txHex: string): Promise<number | undefined>;
}