import { IFaucetService } from './interface/faucet.service.interface';
import { KomodoRepository } from "../komodo/komodo.repository";
import { Transaction } from "../transaction/dto/transaction.dto";

export class FaucetService implements IFaucetService {

    async faucetget(): Promise<Transaction> {
        const res = await KomodoRepository.faucetRepositoty.faucetget();

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
}