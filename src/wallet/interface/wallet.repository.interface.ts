import { RPCResponse } from "../../shared/rpc/rpc-response.dto";

export interface IWalletRepository {
    signMessage(address: string, message: string): Promise<RPCResponse<string>>;
    getAccountAddress(name: string): Promise<RPCResponse<string>>;
    moveCoins(from: string, to: string, coins: number, comment: string, level?: number): Promise<RPCResponse<boolean>>;
}