import { KomodoRepository } from "../komodo/komodo.repository";
import { IWalletService } from "./interface/wallet.service.interface";
import { PublicKeyObject } from "./dto/public-key.dto";

export class WalletService implements IWalletService {
    async signMessage(address: string, message: string): Promise<string> {
        const res = await KomodoRepository.walletRepository.signMessage(address, message);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result;
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async getAccountAddress(name: string): Promise<string> {
        const address = await KomodoRepository.walletRepository.getAccountAddress(name);
        if (address.error) {
            throw new Error(address.error.message)
        } else {
            if (address.result) {
                return address.result;
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async moveCoins(from: string, to: string, coins: number, content: string = '', level?: number): Promise<boolean> {
        const result = await KomodoRepository.walletRepository.moveCoins(from, to, coins, content, level);
        if(result.error) {
            throw new Error(result.error.message)
        } else {
            if(result.result) {
                return result.result;
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async dumpprivkey(address: string): Promise<string> {
        const result = await KomodoRepository.walletRepository.dumpprivkey(address);
        if(result.error) {
            throw new Error(result.error.message)
        } else {
            if(result.result) {
                return result.result;
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async validateaddress(address: string): Promise<PublicKeyObject> {
        const result = await KomodoRepository.walletRepository.validateaddress(address);
        if(result.error) {
            throw new Error(result.error.message)
        } else {
            if(result.result) {
                return result.result;
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
}