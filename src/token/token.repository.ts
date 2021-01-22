import { KomodoRPC } from "../komodo/komodo.rpc";
import { RPCResponse } from "../shared/rpc/rpc-response.dto";
import { Transaction } from "../transaction/dto/transaction.dto";
import { TokenAddress } from "./dto/token-address.dto";
import { TokenBalanceResult } from "./dto/token-balance-result.dto";
import { Token } from "./dto/token.dto";
import { ITokenRepository } from "./interface/token.repository.interface";

export class TokenRepository implements ITokenRepository {
    async tokenAddress(pubkey?: string): Promise<RPCResponse<TokenAddress>> {
        const result: RPCResponse<TokenAddress> = await KomodoRPC.client.rpcRequest("tokenaddress", pubkey);
        return result;
    }
    async tokenInfo(tokenid: string): Promise<RPCResponse<Token>> {
        const result: RPCResponse<Token> = await KomodoRPC.client.rpcRequest("tokeninfo", tokenid);
        return result;
    }
    async tokenCreate(name: string, supply: number, description: string, data?: string): Promise<RPCResponse<Transaction>> {
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest("tokencreate", name, supply.toString(), description, data);
        return result;
    }
    async tokenList(): Promise<RPCResponse<string[]>> {
        const result: RPCResponse<string[]> = await KomodoRPC.client.rpcRequest("tokenlist");
        return result;
    }
    async tokenBalance(tokenid: string, pubkey?: string): Promise<RPCResponse<TokenBalanceResult>> {
        const result: RPCResponse<TokenBalanceResult> = await KomodoRPC.client.rpcRequest("tokenbalance", tokenid, pubkey);
        return result;
    }
    async tokenTransfer(tokenid: string, destPubkey: string, amount: number): Promise<RPCResponse<Transaction>> {
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest("tokentransfer", tokenid, destPubkey, amount.toString());
        return result;
    }

}