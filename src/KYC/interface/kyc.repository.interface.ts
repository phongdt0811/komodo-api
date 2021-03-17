import { RPCResponse } from "../../shared/rpc/rpc-response.dto";

export interface IKYCRepository {
    getAccountAddress(name: string): Promise<RPCResponse<string>>;
    sendCoins(to: string, coins: number, comment: string, level?: number): Promise<RPCResponse<string>>;
}