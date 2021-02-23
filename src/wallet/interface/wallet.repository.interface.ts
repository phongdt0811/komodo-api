import { RPCResponse } from "../../shared/rpc/rpc-response.dto";
import { PublicKeyObject } from "../dto/public-key.dto";

export interface IWalletRepository {
    signMessage(address: string, message: string): Promise<RPCResponse<string>>;
    getAccountAddress(name: string): Promise<RPCResponse<string>>;
    moveCoins(from: string, to: string, coins: number, comment: string, level?: number): Promise<RPCResponse<boolean>>;
    dumpprivkey(address: string): Promise<RPCResponse<string>>;
    validateaddress(address: string): Promise<RPCResponse<PublicKeyObject>>;
}