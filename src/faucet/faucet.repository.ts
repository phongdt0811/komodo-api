import { KomodoRPC } from "../komodo/komodo.rpc";
import { RPCResponse } from "../shared/rpc/rpc-response.dto";
import { IFaucetRepository } from './interface/faucet.repository.interface';
import { Transaction } from "../transaction/dto/transaction.dto";

export class FaucetRepository implements IFaucetRepository {
    async faucetget(): Promise<RPCResponse<Transaction>> {
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest('faucetget');
        return result;
    }
}