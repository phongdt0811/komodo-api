import { KomodoRPC } from "../komodo/komodo.rpc";
import { RPCResponse } from "../shared/rpc/rpc-response.dto";
import { IWalletRepository } from "./interface/wallet.repository.interface";

export class WalletRepository implements IWalletRepository {
    async signMessage(address: string, message: string): Promise<RPCResponse<string>> {
        const result: RPCResponse<string> = await KomodoRPC.client.rpcRequest("signmessage", address, message);
        return result;
    }
    async getAccountAddress(name: string): Promise<RPCResponse<string>> {
        const result: RPCResponse<string> = await KomodoRPC.client.rpcRequest('getaccountaddress', name);
        return result;
    }
    async moveCoins(from: string, to: string, coins: number, content: string = '', level?: number): Promise<RPCResponse<boolean>> {
        const result: RPCResponse<boolean> = await KomodoRPC.client.rpcRequest('move', from, to, coins, content);
        return result;
    }
}