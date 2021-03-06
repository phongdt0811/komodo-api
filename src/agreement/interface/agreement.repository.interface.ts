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
     * @param filtertype [OPTIONAL] Filter keyword for returning specific types of transaction IDs. The list of valid keywords are as follows:
     * - `all` - return every type of transaction, without filtering
     * - `proposals` - only return proposal IDs
     * - `agreements` - only return agreement IDs
     * Default is `all`.
     * @param filtertxid [OPTIONAL] If specificd, proposals that do not reference or are related to this agreement ID will be discared from the returned list.
     */
    agreementList(filtertype?: string, filtertxid?: string): Promise<RPCResponse<string[]>>;

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
     * @param agreementhash Field for arbitrary SHA256 hash, can be used to store a fingering of a digital document or to reference a transaction in the blockchain.
     * @param depositcut The amount taken from the deposit (in coins) that will be sent to the resulting proposal's sender if the agreement is closed. The res of the deposit will be given the recipient.
     * @param agreementname [OPTIONAL] New name for specified agreement. (max 64 characters) If left imspecidied, the current agreement name will be used for this field.
     * @param payment [OPTIONAL] If set, recipient will have to send this amount of funds to the sender in order to accept this proposal successfully. This parameter could also be used for invoice functionality.
     */
    agreementClose(agreementtxid: string, agreementhash: string, depositcut?: number, agreementname?: string, payment?: number): Promise<RPCResponse<Transaction>>;

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
     * @param disputeinfo [OPTIONAL] Free-form text field describing the dispute. (max 256 characters)
     * @param bFinalDispute	[OPTIONAL] Can be set to "true" or "false". If set to "true", the arbitrator will be required to unlock the deposit and close the agreement in order to resolve this dispute. Default is "false".
     */
    agreementDispute(agreementtxid: string, disputeinfo?: string, bFinalDispute?: boolean): Promise<RPCResponse<Transaction>>;

    /**
     * @param disputetxid Transaction id of the dispute to resolve. 
     * @param depositcut The amount of coins to send to the claimant, sourced from the deposit of the agreement referenced by the specified dispute. If the amount is not negative (0 or above), the remainder of the deposit will be sent to the defendant. If the amount is negative (less than 0), and the bFinalDispute variable in the referenced dispute transaction is set to "false", the dispute will be resolved without withdrawing the deposit and closing the agreement.
     * @param resolutioninfo [OPTIONAL] Free-form text field decribing the resolutions. (max 256 characters)
     */
    agreementResolve(disputetxid: string, depositcut: number, resolutioninfo?: string): Promise<RPCResponse<Transaction>>;

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
     * @param agreementtxid  Transaction id of the agreement to be updated.
     * @param agreementhash Field for arbitrary SHA256 hash, can be used to store a fingerprint of a digital document or to reference a transaction in the blockchain.
     * @param agreementname [OPTIONAL] New name for the specified agreement. (max 64 characters). If left unspecified, the current agreement name will be used for this field.
     * @param payment [OPTIONAL] If set, recipient will have to send this amount of funds to the sender in order to accept this proposal successfully.
     */
    agreementUpdate(agreementtxid: string, agreementhash: string, agreementname?: string, payment?: number): Promise<RPCResponse<Transaction>>;
}