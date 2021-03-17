import { Transaction } from "../../transaction/dto/transaction.dto";

export interface IFaucetService {
    faucetget(): Promise<Transaction>;
}