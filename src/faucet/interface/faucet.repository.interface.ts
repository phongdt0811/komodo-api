import { RPCResponse } from "../../shared/rpc/rpc-response.dto";
import { Transaction } from "../../transaction/dto/transaction.dto";

export interface IFaucetRepository {
    faucetget(): Promise<RPCResponse<Transaction>>;
}