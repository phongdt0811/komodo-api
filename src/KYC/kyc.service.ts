import { IKYCService } from './interface/kyc.service.interface';
import { KomodoRepository } from "../komodo/komodo.repository";

export class KYCService implements IKYCService {

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

    async sendCoins(to: string, coins: number, comment: string, level?: number) : Promise<string> {
        const result = await KomodoRepository.kycRepositoty.sendCoins(to, coins, comment);
        if(result.error) {
            throw new Error(result.error.message)
        } else {
            if(result.result) {
                return result.result;
            } else {
                throw new Error("Cannot send coins");
            }
        }
    }
}