import { KomodoRepository } from "../komodo/komodo.repository";
import { KomodoService } from "../komodo/komodo.service";
import { RPCResponse } from "../shared/rpc/rpc-response.dto";
import { Transaction } from "../transaction/dto/transaction.dto";
import { CreatePawnshopRequest } from "./dto/create-pawnshop-request.dto";
import { Pawnshop } from "./dto/pawnshop.dto";
import { IPawnshopRepository } from "./interface/pawshop.repository.interface";
import { IPawnshopService } from "./interface/pawshop.service.interface";

export class PawnshopService implements IPawnshopService {
    async pawnshopList(): Promise<string[]> {
        const res = await KomodoRepository.pawnshopRepository.pawnshopList();
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
    async pawnshopInfo(createtxid: string): Promise<Pawnshop> {
        const tokenRes = await KomodoRepository.pawnshopRepository.pawnshopInfo(createtxid);
        const transactionRes = await KomodoService.transactionService.getRawTransaction(createtxid, 1);
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
    async pawnshopCreate(data: CreatePawnshopRequest): Promise<Transaction> {
        const res = await KomodoRepository.pawnshopRepository.pawnshopCreate(data);
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
    async pawnshopCancel(createtxid: string): Promise<Transaction> {
        const res = await KomodoRepository.pawnshopRepository.pawnshopCancel(createtxid);
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
    async pawnshopFund(createtxid: string, amount: number): Promise<Transaction> {
        const res = await KomodoRepository.pawnshopRepository.pawnshopFund(createtxid, amount);
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
    async pawnshopExchange(createtxid: string): Promise<Transaction> {
        const res = await KomodoRepository.pawnshopRepository.pawnshopExchange(createtxid);
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
    async pawnshoppLedge(createtxid: string): Promise<Transaction> {
        const res = await KomodoRepository.pawnshopRepository.pawnshoppLedge(createtxid);
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

}