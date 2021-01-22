import { RPCResponse } from "../../shared/rpc/rpc-response.dto";
import { Transaction } from "../../transaction/dto/transaction.dto";
import { CreatePawnshopRequest } from "../dto/create-pawnshop-request.dto";
import { Pawnshop } from "../dto/pawnshop.dto";

export interface IPawnshopRepository {
    /**
     * 
     */
    pawnshopList(): Promise<RPCResponse<string[]>>;

    /**
     * 
     * @param createtxid  the Pawnshop instance's creation transaction ID
     */
    pawnshopInfo(createtxid: string): Promise<RPCResponse<Pawnshop>>;

    /**
     * 
     * @param data data pawshop created
     */
    pawnshopCreate(data: CreatePawnshopRequest): Promise<RPCResponse<Transaction>>;

    /**
     * 
     * @param createtxid ID of the creation transaction for the Pawnshop instance to be cancelled.
     */
    pawnshopCancel(createtxid: string): Promise<RPCResponse<Transaction>>;

    /**
     * 
     * @param createtxid ID of the creation transaction for the Pawnshop instance to be funded
     * @param amount amount of coins to send
     */
    pawnshopFund(createtxid: string, amount: number): Promise<RPCResponse<Transaction>>;

    /**
     * 
     * @param createtxid ID of the creation transaction for the Pawnshop instance to be completed.
     */
    pawnshopExchange(createtxid: string): Promise<RPCResponse<Transaction>>;

    /**
     * 
     * @param createtxid ID of the creation transaction for the Pawnshop instance to be legded
     */
    pawnshoppLedge(createtxid: string): Promise<RPCResponse<Transaction>>;
}