import { KomodoRepository } from "../komodo/komodo.repository";
import { KomodoService } from "../komodo/komodo.service";
import { Transaction } from "../transaction/dto/transaction.dto";
import { TokenAddress } from "./dto/token-address.dto";
import { TokenBalanceResult } from "./dto/token-balance-result.dto";
import { Token } from "./dto/token.dto";
import { ITokenService } from "./interface/token.service.interface";

export class TokenService implements ITokenService {
    constructor() { }
    async tokenAddress(pubkey?: string): Promise<TokenAddress> {
        const res = await KomodoRepository.tokenRepository.tokenAddress(pubkey);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async tokenCollection(pubkey?: string): Promise<string[]> {
        const result: string[] = [];
        const tokenList = await this.tokenList();
        for(const tokenid of tokenList) {
            const tokenBalance = await this.tokenBalance(tokenid, pubkey);
            if (tokenBalance.balance > 0) {
                result.push(tokenid);

            }
        }
        return result;
    }
    async tokenInfo(tokenid: string): Promise<Token> {
        const tokenRes = await KomodoRepository.tokenRepository.tokenInfo(tokenid);
        const transactionRes = await KomodoService.transactionService.getRawTransaction(tokenid, 1);
        if (tokenRes.error) {
            throw new Error(tokenRes.error.message)
        } else {
            if (tokenRes.result) { 
                tokenRes.result.confirmations = transactionRes.confirmations;
                tokenRes.result.isValid = transactionRes.confirmations > 2;
                return  tokenRes.result;
            } else {
                throw new Error("Cannot found result");
            }
        }
    }

    async tokenCreate(name: string, supply: number, description: string, data?: string): Promise<Transaction> {
        const res = await KomodoRepository.tokenRepository.tokenCreate(name, supply, description, data);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                try {
                    res.result.fee = await KomodoService.transactionService.caculatedFee(res.result.hex);
                } catch (error) {
                    console.log("Caculator fee error", error);
                }
                return res.result;
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async tokenList(): Promise<string[]> {
        const res = await KomodoRepository.tokenRepository.tokenList();
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async tokenBalance(tokenid: string, pubkey?: string): Promise<TokenBalanceResult> {
        const res = await KomodoRepository.tokenRepository.tokenBalance(tokenid, pubkey);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async tokenTransfer(tokenid: string, destPubkey: string, amount: number): Promise<Transaction> {
        const res = await KomodoRepository.tokenRepository.tokenTransfer(tokenid, destPubkey, amount);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    
}