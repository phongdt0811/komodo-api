import { KomodoRPC } from "../komodo/komodo.rpc";
import { RpcClient } from "../shared/rpc/rpc-client";
import { RPCResponse } from "../shared/rpc/rpc-response.dto";
import { Transaction } from "../transaction/dto/transaction.dto";
import { CreatePawnshopRequest } from "./dto/create-pawnshop-request.dto";
import { Pawnshop } from "./dto/pawnshop.dto";
import { IPawnshopRepository } from "./interface/pawshop.repository.interface";

export class PawshopRepository implements IPawnshopRepository {
    async pawnshopList(): Promise<RPCResponse<string[]>> {
        const result: RPCResponse<string[]> = await KomodoRPC.client.rpcRequest("pawnshoplist");
        return result;
    }
    async pawnshopInfo(createtxid: string): Promise<RPCResponse<Pawnshop>> {
        const result: RPCResponse<Pawnshop> = await KomodoRPC.client.rpcRequest("pawnshopinfo", createtxid);
        return result;
    }
    async pawnshopCreate(data: CreatePawnshopRequest): Promise<RPCResponse<Transaction>> {
        const {name, coin_supplier, token_supplier, numcoins, tokenid, numtokens, flags, agreementtxid} = data;
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest("pawnshopcreate", name, coin_supplier, token_supplier, numcoins, tokenid, numtokens, flags, agreementtxid);
        return result;
    }
    async pawnshopCancel(createtxid: string): Promise<RPCResponse<Transaction>> {
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest("pawnshopcancel", createtxid);
        return result;
    }
    async pawnshopFund(createtxid: string, amount: number): Promise<RPCResponse<Transaction>> {
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest("pawnshopfund", createtxid, amount);
        return result;
    }
    async pawnshopExchange(createtxid: string): Promise<RPCResponse<Transaction>> {
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest("pawnshopexchange", createtxid);
        return result;
    }
    async pawnshoppLedge(createtxid: string): Promise<RPCResponse<Transaction>> {
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest("pawnshoppledge", createtxid);
        return result;
    }
}