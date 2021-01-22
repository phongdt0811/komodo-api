import { RPCResponse } from "../../shared/rpc/rpc-response.dto";

export interface ITransactionRepository {
    /**
     * 
     * @param txHex the hex string of the raw transaction
     */
    publishTransaction(txHex: string): Promise<RPCResponse<string>>;

    /**
     * 
     * @param txid the transaction id
     * @param verbose if 0, the method returns a string in hex; otherwise, it returns a json object
     */
    getRawTransaction(txid: string, verbose?: number): Promise<RPCResponse<any>>;

    /**
     * 
     * @param txHex the transaction hex string
     */
    decodeRawTransaction(txHex: string): Promise<RPCResponse<any>>;

    /**
     * 
     * @param txid the transaction id
     * @param vout the vout value
     * @param includemempool whether to include the mempool
     */
    getTxOut(txid: string, vout: number, includemempool?: boolean): Promise<RPCResponse<any>>;
}