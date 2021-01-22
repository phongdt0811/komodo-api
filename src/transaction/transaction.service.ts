import { KomodoRepository } from "../komodo/komodo.repository";
import { ITransactionService } from "./interface/transaction.service.interface";

export class TransactionService implements ITransactionService {
    constructor() { }
    async decodeRawTransaction(txHex: string): Promise<any> {
        const res = await KomodoRepository.transactionRepository.decodeRawTransaction(txHex);
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

    async sendRawTransaction(txHex: string): Promise<string> {
        const res = await KomodoRepository.transactionRepository.publishTransaction(txHex);
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

    async getRawTransaction(txid: string, verbose?: number & 0 | 1): Promise<any> {
        const res = await KomodoRepository.transactionRepository.getRawTransaction(txid, verbose);
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

    async getTxOut (txid: string, vout: number, includemempool?: boolean): Promise<any> {
        const res = await KomodoRepository.transactionRepository.getTxOut(txid, vout, includemempool);
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

    async caculatedFee(txHex: string): Promise<number | undefined> {
        if (!txHex) {
            return undefined;
        }
        let value_in = 0;
        let value_out = 0;
        const txDecoded = await this.decodeRawTransaction(txHex);
        const getTxPromise: Promise<any>[] = [];
        txDecoded.vin.forEach((vin: { txid: string; vout: number; }) => {
            getTxPromise.push(this.getTxOut(vin.txid, vin.vout));
        });
        
        const vins = await Promise.all(getTxPromise);
        

        vins.forEach(vin => {
            value_in += vin.value;
        });
        txDecoded.vout.forEach((out: { value: number; }) => {
            value_out += out.value;
        });
        return value_in - value_out;
    }
    
}