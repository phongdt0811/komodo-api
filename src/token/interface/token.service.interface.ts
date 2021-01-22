import { Transaction } from "../../transaction/dto/transaction.dto";
import { TokenAddress } from "../dto/token-address.dto";
import { TokenBalanceResult } from "../dto/token-balance-result.dto";
import { Token } from "../dto/token.dto";

export interface ITokenService {
    /**
     * The method reveals information about any token.
     * @param tokenid the txid that identifies the token
     */
    tokenInfo(tokenid: string): Promise<Token>;

    /**
     * The method creates a new token.
     * For every token created, the method requires one satoshi of the parent blockchain's coins. For example, 1 COIN of the blockchain provides 100000000 tokens.
     * @param name the proposed name of the token
     * @param supply the amount of coins used to create the tokens
     * @param description the description of the token
     * @returns The method returns a hex-encoded transaction which should then be broadcast using sendrawtransaction. sendrawtransaction then returns a txid, which is your tokenid
     */
    tokenCreate(name: string, supply: number, description: string, data?: string): Promise<Transaction>;

    /**
     * The method lists all available tokens on the asset chain
     */
    tokenList(): Promise<string[]>;


    /**
     * The method lists all available tokens of a specific pubkey. If no pubkey is provided, the pubkey used to launch the daemon is the default.
     */
    tokenCollection(pubkey?: string): Promise<string[]>;

    /**
     * The method checks the token balance according to a provided pubkey.
     * @param tokenid the txid that identifies the token
     * @param pubkey the pubkey for which to examine the balance; if no pubkey is provided, the pubkey used to launch the daemon is the default
     */
    tokenBalance(tokenid: string, pubkey?: string): Promise<TokenBalanceResult>;

    /**
     * The method transfers tokens from one Antara Address to another.
     * @param tokenid the identifying txid for the token id
     * @param destPubkey the pubkey where the tokens should be sent
     * @param amount the number of tokens to send
     * @returns The method returns a raw hex, which must be broadcast using sendrawtransaction to complete the command.
     */
    tokenTransfer(tokenid: string, destPubkey: string, amount: number): Promise<Transaction>;

    /**
     * 
     * @param pubkey the pubkey for which to examine the balance; if no pubkey is provided, the pubkey used to launch the daemon is the default
     */
    tokenAddress(pubkey?: string): Promise<TokenAddress>;
}