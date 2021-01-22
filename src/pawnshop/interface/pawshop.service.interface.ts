import { RPCResponse } from "../../shared/rpc/rpc-response.dto";
import { Transaction } from "../../transaction/dto/transaction.dto";
import { CreatePawnshopRequest } from "../dto/create-pawnshop-request.dto";
import { Pawnshop } from "../dto/pawnshop.dto";

export interface IPawnshopService {
    /**
     * 
     */
    pawnshopList(): Promise<string[]>;

    /**
     * 
     * @param createtxid The Pawnshop instance's creation transaction ID
     */
    pawnshopInfo(createtxid: string): Promise<Pawnshop>;
    /**
     * @param data Data pawnshop created
     */
    pawnshopCreate(data: CreatePawnshopRequest): Promise<Transaction>;

    /**
     * 
     * @param createtxid ID of the creation transaction for the Pawnshop instance to be cancelled.
     */
    pawnshopCancel(createtxid: string): Promise<Transaction>;

    /**
     * 
     * @param createtxid ID of the creation transaction for the Pawnshop instance to be funded
     * @param amount Amount of coins to send
     */
    pawnshopFund(createtxid: string, amount: number): Promise<Transaction>;

    /**
     * 
     * @param createtxid ID of the creation transaction for the Pawnshop instance to be completed.
     */
    pawnshopExchange(createtxid: string): Promise<Transaction>;

    /**
     * 
     * @param createtxid ID of the creation transaction for the Pawnshop instance to be legded
     */
    pawnshoppLedge(createtxid: string): Promise<Transaction>;
}