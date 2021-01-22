import { RPCResponse } from "../../shared/rpc/rpc-response.dto";
import { Transaction } from "../../transaction/dto/transaction.dto";
import { TokenAddress } from "../dto/token-address.dto";
import { TokenBalanceResult } from "../dto/token-balance-result.dto";
import { Token } from "../dto/token.dto";

export interface ITokenRepository {
    /**
     * 
     * @param tokenid the txid that identifies the token
     */
    tokenInfo(tokenid: string): Promise<RPCResponse<Token>>;

    /**
     * 
     * @param name the proposed name of the token
     * @param supply the amount of coins used to create the tokens
     * @param description the description of the token
     * @param data the data describing its corresponding asset in hex-encoded format. Only available for Non-Fungible Tokens (supply=0.00000001)
     */
    tokenCreate(name: string, supply: number, description: string, data?: string): Promise<RPCResponse<Transaction>>;

    /**
     * 
     */
    tokenList(): Promise<RPCResponse<string[]>>;

    /**
     * 
     * @param tokenid the txid that identifies the token
     * @param pubkey the pubkey for which to examine the balance; if no pubkey is provided, the pubkey used to launch the daemon is the default
     */
    tokenBalance(tokenid: string, pubkey?: string): Promise<RPCResponse<TokenBalanceResult>>;

    /**
     * 
     * @param tokenid the identifying txid for the token id
     * @param destPubkey the pubkey where the tokens should be sent
     * @param amount the number of tokens to send
     */
    tokenTransfer(tokenid: string, destPubkey: string, amount: number): Promise<RPCResponse<Transaction>>;

    /**
     * 
     * @param pubkey the pubkey for which to examine the balance; if no pubkey is provided, the pubkey used to launch the daemon is the default
     */
    tokenAddress(pubkey?: string): Promise<RPCResponse<TokenAddress>>;
}