import { RPCResponse } from "../../shared/rpc/rpc-response.dto";
import { Transaction } from "../../transaction/dto/transaction.dto";
import { AgreementAddress } from "../dto/agreement-address.dto";
import { AgreementInfo } from "../dto/agreement-info.dto";
import { Inventory } from "../dto/inventory.dto";
import { Proposals } from "../dto/proposals.dto";

export interface IAgreementRepository {
    /**
     * @param pubkey the pubkey of the desired address
     */
    agreementAddress(pubkey: string): Promise<RPCResponse<AgreementAddress>>;
    
    /**
     * @param txid ID of an Agreements Module transaction.
     */
    agreementInfo(txid: string): Promise<RPCResponse<AgreementInfo>>;

    /**
     * @param pubkey the pubkey to search various agreements for
     */
    agreementInventory(pubkey?: string): Promise<RPCResponse<Inventory>>;

    /**
     * 
     */
    agreementList(): Promise<RPCResponse<string[]>>;

    /**
     * 
     * @param agreementtxid valid agreement transaction ID. If set, will filter out proposals unrelated to this agreement
     * @param pubkey the pubkey to search various proposals for
     */
    agreementProposals(agreementtxid?: string, pubkey?: string): Promise<RPCResponse<Proposals>>;

    /**
     * 
     * @param agreementtxid valid agreement transaction ID, where the pubkey used to launch the daemon is a member of the agreement
     * @param active_only if set, filters out closed Pawnshop instances
     */
    agreementSettlements(agreementtxid: string, active_only: boolean): Promise<RPCResponse<string[]>>;

    /**
     * 
     * @param agreementtxid the master agreement transaction ID
     */
    agreementSubContracts(agreementtxid: string): Promise<RPCResponse<string[]>>;

    /**
     * 
     * @param agreementtxid the ID of the agreement (contract) to examine
     * @param start_backwards whether to sort the update IDs from latest to oldest, or from oldest to latest
     * @param num_samples maximum amount of IDs to retrieve. If 0 or unspecified, returns all IDs
     */
    agreementUpdateLog(agreementtxid: string, start_backwards: boolean, num_samples?: number): Promise<RPCResponse<string[]>>;


    /**
     * 
     * @param proposaltxid Transaction id of the proposal.
     */
    agreementAccept(proposaltxid: string): Promise<RPCResponse<Transaction>>;

    /**
     * 
     * @param agreementtxid Transaction id of the agreement to be closed.
     * @param name Name or info describing the reason for closure. (max 64 characters)
     * @param datahash Field for arbitrary SHA256 hash, can be used to store a fingerprint of a digital document or to reference a transaction in the blockchain.
     * @param depositcut The amount taken from the deposit that will be sent to the sender if the agreement is closed. The rest of the deposit will be given to the recipient.
     * @param payment If set, recipient will have to send this amount of funds to the sender in order to accept this proposal successfully. This parameter could also be used for invoice functionality.
     * @param prevproposaltxid Transaction id of a previous open proposal to update an agreement by the same sender pubkey. If set, this proposal will supersede the one specified here.
     */
    agreementClose(agreementtxid: string, name: string, datahash: string, depositcut?: number, payment?: number, prevproposaltxid?: string): Promise<RPCResponse<Transaction>>;

    /**
     * 
     * @destpub Pubkey of proposal's intended recipient.
     * @param agreementname Name of the proposed agreement. (max 64 characters)
     * @param agreementhash Field for arbitrary SHA256 hash, can be used to store a fingerprint of a digital document or to reference a transaction in the blockchain.
     * @param deposit Amount that the intended recipient will have to allocate to the agreement global address for deposit in order to accept this proposal successfully. This value must be to at least 0.0001 coins.
     * @param arbitratorpub [OPTIONAL] Pubkey of proposed arbitrator for the agreement. If set to "" or 0, the agreement will have no arbitrator.
     * @param disputefee [OPTIONAL] Fee that will be required to allocate to the arbitrator in order to create a dispute for the proposed agreement. If no arbitrator is set, always resets to 0, otherwise must be set to at least 0.0001 coins.
     * @param refagreementtxid [OPTIONAL] Transaction id of another agreement in the blockchain that shares at least one member pubkey with the proposed agreement. If set, the proposed agreement will reference the agreement specified here.
     * @param payment [OPTIONAL] If set, recipient will have to send this amount of funds (in satoshis) to the sender in order to accept this proposal successfully.
     */
    agreementCreate(destpub: string, agreementname: string, agreementhash: string, deposit: string, arbitratorpub?: string, disputefee?: string, refagreementtxid?: string, payment?: string): Promise<RPCResponse<Transaction>>;

    /**
     * 
     * @param agreementtxid Transaction id of the agreement to be disputed.
     * @param datahash Field for arbitrary SHA256 hash, can be used to store a fingerprint of a digital document or to reference a transaction in the blockchain.
     */
    agreementDispute(agreementtxid: string, datahash: string): Promise<RPCResponse<Transaction>>;

    /**
     * 
     * @param agreementtxid Transaction id of the agreement to have its dispute resolved.
     * @param rewardedpubkey Pubkey to send the deposit to (must be a member of the agreementtxid)
     */
    agreementResolve(agreementtxid: string, rewardedpubkey: string): Promise<RPCResponse<Transaction>>;

    /**
     * 
     * @param proposaltxid Transaction id of the proposal.
     */
    agreementStopProposal(proposaltxid: string): Promise<RPCResponse<Transaction>>;

    /**
     * 
     * @param agreementtxid Transaction id of the agreement to have its deposit unlocked.
     * @param pawnshoptxid Transaction id of the Pawnshop instance.
     */
    agreementUnlock(agreementtxid: string, pawnshoptxid: string): Promise<RPCResponse<Transaction>>;

    /**
     * 
     * @param agreementtxid Transaction id of the agreement to be updated.
     * @param name New name of the proposed agreement. (max 64 characters)
     * @param datahash Field for arbitrary SHA256 hash, can be used to store a fingerprint of a digital document or to reference a transaction in the blockchain.
     * @param payment If set, recipient will have to send this amount of funds to the sender in order to accept this proposal successfully. This parameter could also be used for invoice functionality.
     * @param prevproposaltxid Transaction id of a previous open proposal to update an agreement by the same sender pubkey. If set, this proposal will supersede the one specified here.
     * @param arbitratorfee If set, this will be the new fee that will be required to allocate to the arbitrator in order to create a dispute for the proposed agreement. If no arbitrator is set, always resets to 0, otherwise is set to the current arbitrator fee unless another amount is defined here (must be at least 10000 satoshis).
     */
    agreementUpdate(agreementtxid: string, name: string, datahash: string, payment?: number, prevproposaltxid?: string, arbitratorfee?: number): Promise<RPCResponse<Transaction>>;
}