import { KomodoRPC } from "../komodo/komodo.rpc";
import { RPCResponse } from "../shared/rpc/rpc-response.dto";
import { IKYCRepository } from './interface/kyc.repository.interface';

export class KYCRepository implements IKYCRepository {
    async getAccountAddress(name: string): Promise<RPCResponse<string>> {
        const result: RPCResponse<string> = await KomodoRPC.client.rpcRequest('getaccountaddress', name);
        return result;
    }
    async sendCoins(to: string, coins: number, comment: string, level?: number): Promise<RPCResponse<string>> {
        const result: RPCResponse<string> = await KomodoRPC.client.rpcRequest('sendtoaddress', to, coins, comment);
        return result;
    }
}