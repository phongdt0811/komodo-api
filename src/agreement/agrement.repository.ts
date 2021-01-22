import { KomodoRPC } from "../komodo/komodo.rpc";
import { RPCResponse } from "../shared/rpc/rpc-response.dto";
import { Transaction } from "../transaction/dto/transaction.dto";
import { AgreementAddress } from "./dto/agreement-address.dto";
import { AgreementInfo } from "./dto/agreement-info.dto";
import { Inventory } from "./dto/inventory.dto";
import { Proposals } from "./dto/proposals.dto";
import { IAgreementRepository } from "./interface/agreement.repository.interface";

export class AgreementRepository implements IAgreementRepository {
    async agreementAddress(pubkey: string): Promise<RPCResponse<AgreementAddress>> {
        const result: RPCResponse<AgreementAddress> = await KomodoRPC.client.rpcRequest("agreementaddress", pubkey);
        return result;
    }
    async agreementInfo(txid: string): Promise<RPCResponse<AgreementInfo>> {
        const result: RPCResponse<AgreementInfo> = await KomodoRPC.client.rpcRequest("agreementinfo", txid);
        return result;
    }
    async agreementInventory(pubkey?: string): Promise<RPCResponse<Inventory>> {
        const result: RPCResponse<Inventory> = await KomodoRPC.client.rpcRequest("agreementinventory", pubkey);
        return result;
    }
    async agreementList(): Promise<RPCResponse<string[]>> {
        const result: RPCResponse<string[]> = await KomodoRPC.client.rpcRequest("agreementlist");
        return result;
    }
    async agreementProposals(agreementtxid?: string, pubkey?: string): Promise<RPCResponse<Proposals>> {
        const result: RPCResponse<Proposals> = await KomodoRPC.client.rpcRequest("agreementproposals", agreementtxid, pubkey);
        return result;
    }
    async agreementSettlements(agreementtxid: string, active_only: boolean): Promise<RPCResponse<string[]>> {
        const result: RPCResponse<string[]> = await KomodoRPC.client.rpcRequest("agreementsettlements", agreementtxid, active_only);
        return result;
    }
    async agreementSubContracts(agreementtxid: string): Promise<RPCResponse<string[]>> {
        const result: RPCResponse<string[]> = await KomodoRPC.client.rpcRequest("agreementsubcontracts", agreementtxid);
        return result;
    }
    async agreementUpdateLog(agreementtxid: string, start_backwards: boolean, num_samples?: number): Promise<RPCResponse<string[]>> {
        const result: RPCResponse<string[]> = await KomodoRPC.client.rpcRequest("agreementupdatelog", agreementtxid, start_backwards, num_samples);
        return result;
    }
    async agreementAccept(proposaltxid: string): Promise<RPCResponse<Transaction>> {
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest("agreementaccept", proposaltxid);
        return result;
    }
    async agreementClose(agreementtxid: string, name: string, datahash: string, depositcut?: number, payment?: number, prevproposaltxid?: string): Promise<RPCResponse<Transaction>> {
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest("agreementclose", agreementtxid, name, datahash, depositcut, payment, prevproposaltxid);
        return result;
    }
    async agreementCreate(name: string, datahash: string, client: string, arbitrator: string, arbitratorfee?: string, payment?: string, deposit?: string, prevproposaltxid?: string, refagreementtxid?: string): Promise<RPCResponse<Transaction>> {
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest("agreementcreate", name, datahash, client, arbitrator, arbitratorfee, payment, deposit, prevproposaltxid, refagreementtxid);
        return result;
    }
    async agreementDispute(agreementtxid: string, datahash: string): Promise<RPCResponse<Transaction>> {
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest("agreementdispute", agreementtxid, datahash);
        return result;
    }
    async agreementResolve(agreementtxid: string, rewardedpubkey: string): Promise<RPCResponse<Transaction>> {
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest("agreementresolve", agreementtxid, rewardedpubkey);
        return result;
    }
    async agreementStopProposal(proposaltxid: string): Promise<RPCResponse<Transaction>> {
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest("agreementstopproposal", proposaltxid);
        return result;
    }
    async agreementUnlock(agreementtxid: string, pawnshoptxid: string): Promise<RPCResponse<Transaction>> {
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest("agreementunlock", agreementtxid, pawnshoptxid);
        return result;
    }
    async agreementUpdate(agreementtxid: string, name: string, datahash: string, payment?: number, prevproposaltxid?: string, arbitratorfee?: number): Promise<RPCResponse<Transaction>> {
        const result: RPCResponse<Transaction> = await KomodoRPC.client.rpcRequest("agreementupdate", agreementtxid, name, datahash, payment, prevproposaltxid, arbitratorfee);
        return result;
    }
}