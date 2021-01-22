import { KomodoRPC } from "../komodo/komodo.rpc";
import { RPCResponse } from "../shared/rpc/rpc-response.dto";
import { ITransactionRepository } from "./interface/transaction.repository.interface";

export class TransactionRepository implements ITransactionRepository {
    async decodeRawTransaction(txHex: string): Promise<RPCResponse<any>> {
        const result: RPCResponse<any> = await KomodoRPC.client.rpcRequest("decoderawtransaction", txHex);
        return result;
    }
    async getRawTransaction(txid: string, verbose?: number): Promise<RPCResponse<any>> {
        const result: RPCResponse<any> = await KomodoRPC.client.rpcRequest("getrawtransaction", txid, verbose);
        return result;
    }
    
    async publishTransaction(txHex: string): Promise<RPCResponse<string>> {
        const result: RPCResponse<string> = await KomodoRPC.client.rpcRequest("sendrawtransaction", txHex);
        return result;
    }

    async getTxOut(txid: string, vout: number, includemempool?: boolean): Promise<RPCResponse<any>> {
        const result: RPCResponse<string> = await KomodoRPC.client.rpcRequest("gettxout", txid, vout, includemempool);
        return result;
    }
    
}