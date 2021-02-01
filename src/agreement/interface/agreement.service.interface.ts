import { Transaction } from "../../transaction/dto/transaction.dto";
import { AgreementAddress } from "../dto/agreement-address.dto";
import { AgreementInfo } from "../dto/agreement-info.dto";
import { Inventory } from "../dto/inventory.dto";
import { Proposals } from "../dto/proposals.dto";

export interface IAgreementService {
    /**
     * The method returns information about an agreement address according to a specific pubkey
     * @param pubkey the pubkey of the desired address
     */
    agreementAddress(pubkey: string): Promise<AgreementAddress>;
    
    /**
     * The method returns information about any type of transaction created by the Agreements Module.
     * @param txid ID of an Agreements Module transaction.
     */
    agreementInfo(txid: string): Promise<AgreementInfo>;

    /**
     * The method returns three arrays (one for seller, client and arbitrator) of agreement transaction IDs that the specified pubkey is a member of
     * @param pubkey the pubkey to search various agreements for
     */
    agreementInventory(pubkey?: string): Promise<Inventory>;
    
    /**
     * The method returns an array of every active proposal and agreement transaction ID in the blockchain.
     */
    agreementList(): Promise<string[]>;

    /**
     * The method returns three arrays (one for sender, receiver and arbitrator) of agreement proposal transaction IDs that the specified pubkey is referenced in
     * @param agreementtxid valid agreement transaction ID. If set, will filter out proposals unrelated to this agreement
     * @param pubkey the pubkey to search various proposals for
     */
    agreementProposals(agreementtxid?: string, pubkey?: string): Promise<Proposals>;

    /**
     * The method method returns an array of Pawnshop instance transaction IDs that reference the specified agreement transaction ID
     * @param agreementtxid valid agreement transaction ID, where the pubkey used to launch the daemon is a member of the agreement
     * @param active_only if set, filters out closed Pawnshop instances
     */
    agreementSettlements(agreementtxid: string, active_only: boolean): Promise<string[]>;

    /**
     * The method returns and array of agreement transaction IDs that reference the specified agreement transaction ID as the master agreement.
     * @param agreementtxid the master agreement transaction ID
     */
    agreementSubContracts(agreementtxid: string): Promise<string[]>;

    /**
     * The method returns an array of agreement update & closure transaction IDs for the specified agreementtxid. The size and sorting of the array can be configured using the start_backwards and num_samples parameters.
     * @param agreementtxid agreementtxid the ID of the agreement (contract) to examine
     * @param start_backwards whether to sort the update IDs from latest to oldest, or from oldest to latest
     * @param num_samples maximum amount of IDs to retrieve. If 0 or unspecified, returns all IDs
     * @returns 
     */
    agreementUpdateLog(agreementtxid: string, start_backwards: boolean, num_samples?: number): Promise<string[]>;
    
    /**
     * The method creates a proposal acceptance transaction and returns the raw hex. The creator of this transaction must be the recipient of the proposal being accepted for this RPC to be executed successfully.
     * @param proposaltxid Transaction id of the proposal.
     * @returns The method returns a hex value which must then be broadcast using the sendrawtransaction method. The sendrawtransaction method will then return a txid. This txid is the agreementtxid that serves to identify the resulting contract and will be used for all further methods that change its status.
     */
    agreementAccept(proposaltxid: string): Promise<Transaction>;

    /**
     * The method creates an agreement closure proposal transaction and returns the raw hex. The agreement will be closed once this proposal is accepted by the owner of the designated recipient pubkey using the agreementaccept method.
     * @param agreementtxid Transaction id of the agreement to be closed.
     * @param name Name or info describing the reason for closure. (max 64 characters)
     * @param datahash Field for arbitrary SHA256 hash, can be used to store a fingerprint of a digital document or to reference a transaction in the blockchain.
     * @param depositcut The amount taken from the deposit that will be sent to the sender if the agreement is closed. The rest of the deposit will be given to the recipient.
     * @param payment If set, recipient will have to send this amount of funds to the sender in order to accept this proposal successfully. This parameter could also be used for invoice functionality.
     * @param prevproposaltxid Transaction id of a previous open proposal to update an agreement by the same sender pubkey. If set, this proposal will supersede the one specified here.
     * @returns The method returns a hex value which must then be broadcast using the sendrawtransaction method. The sendrawtransaction method will then return a txid. This txid is the proposaltxid that serves to identify the agreement closure proposal.
     */
    agreementClose(agreementtxid: string, name: string, datahash: string, depositcut?: number, payment?: number, prevproposaltxid?: string): Promise<Transaction>;

    /**
     * The method creates a new agreement proposal transaction and returns the raw hex. The agreement will be fully set up once this proposal is accepted by the owner of the designated recipient pubkey using the agreementaccept method.
     * @destpub Pubkey of proposal's intended recipient.
     * @param agreementname Name of the proposed agreement. (max 64 characters)
     * @param agreementhash Field for arbitrary SHA256 hash, can be used to store a fingerprint of a digital document or to reference a transaction in the blockchain.
     * @param deposit Amount that the intended recipient will have to allocate to the agreement global address for deposit in order to accept this proposal successfully. This value must be to at least 0.0001 coins.
     * @param arbitratorpub [OPTIONAL] Pubkey of proposed arbitrator for the agreement. If set to "" or 0, the agreement will have no arbitrator.
     * @param disputefee [OPTIONAL] Fee that will be required to allocate to the arbitrator in order to create a dispute for the proposed agreement. If no arbitrator is set, always resets to 0, otherwise must be set to at least 0.0001 coins.
     * @param refagreementtxid [OPTIONAL] Transaction id of another agreement in the blockchain that shares at least one member pubkey with the proposed agreement. If set, the proposed agreement will reference the agreement specified here.
     * @param payment [OPTIONAL] If set, recipient will have to send this amount of funds (in satoshis) to the sender in order to accept this proposal successfully.
     * @returns The method returns a hex value which must then be broadcast using the sendrawtransaction method. The sendrawtransaction method will then return a txid. This txid is the proposaltxid that serves to identify the proposal.
     */
    agreementCreate(destpub: string, agreementname: string, agreementhash: string, deposit: number, arbitratorpub?: string | number, disputefee?: number, refagreementtxid?: string, payment?: number): Promise<Transaction>;

    /**
     * The method creates an agreement dispute transaction and returns the raw hex. This transaction will cost the sender a fee equal to the latest arbitrator fee defined for the agreement. Only allowed for members of the agreement (sender pubkey must be either seller or client pubkey).
     * @param agreementtxid Transaction id of the agreement to be disputed.
     * @param datahash Field for arbitrary SHA256 hash, can be used to store a fingerprint of a digital document or to reference a transaction in the blockchain.
     * @returns The method returns a hex value which must then be broadcast using the sendrawtransaction method. The sendrawtransaction method will then return a txid identifying the agreement dispute transaction.
     */
    agreementDispute(agreementtxid: string, datahash: string): Promise<Transaction>;

    /**
     * The method creates an agreement dispute resolution transaction and returns the raw hex.
     * Only available to the arbitrator of the agreementtxid.
     * @param agreementtxid Transaction id of the agreement to have its dispute resolved.
     * @param rewardedpubkey Pubkey to send the deposit to (must be a member of the agreementtxid)
     * @returns The method returns a hex value which must then be broadcast using the sendrawtransaction method. The sendrawtransaction method will then return a txid identifying the agreement dispute resolution transaction.
     */
    agreementResolve(agreementtxid: string, rewardedpubkey: string): Promise<Transaction>;

    /**
     * The method creates a proposal closure transaction and returns the raw hex. The creator of this transaction must be either the creator or recipient of the proposal being closed for this RPC to be executed successfully.
     * @param proposaltxid Transaction id of the proposal.
     * @returns The method returns a hex value which must then be broadcast using the sendrawtransaction method. The sendrawtransaction method will then return a @txid identifying the resulting proposal closure transaction. When this txid is successfully confirmed, the specified proposaltxid will no longer be acceptable using the agreementaccept method by anyone.
     */
    agreementStopProposal(proposaltxid: string): Promise<Transaction>;

    /**
     * The method creates an agreement deposit unlock transaction and returns the raw hex. The transaction sends the deposit to the chosen Pawnshop instance escrow, and refunds any excess funds to the agreementtxid client pubkey.
     * Only available to the coin supplier of the Pawnshop instance, as long as it has this agreementtxid defined in its create transaction, has the deposit unlock requirement flag set and is able to have its required coin balance met by sending some or all of the deposit to the escrow.
     * @param agreementtxid Transaction id of the agreement to have its deposit unlocked.
     * @param pawnshoptxid Transaction id of the Pawnshop instance.
     * @returns The method returns a hex value which must then be broadcast using the sendrawtransaction method. The sendrawtransaction method will then return a txid identifying the resulting deposit unlock transaction. When this txid is successfully confirmed, the specified agreementtxid will be effectively closed, with a special status named "in settlement" set to the contract.
     */
    agreementUnlock(agreementtxid: string, pawnshoptxid: string): Promise<Transaction>;
    
    /**
     * The method creates an agreement update proposal transaction and returns the raw hex. The agreement will be updated once this proposal is accepted by the owner of the designated recipient pubkey using the agreementaccept method.
     * @param agreementtxid  Transaction id of the agreement to be updated.
     * @param name New name of the proposed agreement. (max 64 characters)
     * @param datahash Field for arbitrary SHA256 hash, can be used to store a fingerprint of a digital document or to reference a transaction in the blockchain.
     * @param payment If set, recipient will have to send this amount of funds to the sender in order to accept this proposal successfully. This parameter could also be used for invoice functionality.
     * @param prevproposaltxid Transaction id of a previous open proposal to update an agreement by the same sender pubkey. If set, this proposal will supersede the one specified here.
     * @param arbitratorfee If set, this will be the new fee that will be required to allocate to the arbitrator in order to create a dispute for the proposed agreement. If no arbitrator is set, always resets to 0, otherwise is set to the current arbitrator fee unless another amount is defined here (must be at least 10000 satoshis).
     * @returns returns a hex value which must then be broadcast using the sendrawtransaction method.
     */
    agreementUpdate(agreementtxid: string, name: string, datahash: string, payment?: number, prevproposaltxid?: string, arbitratorfee?: number): Promise<Transaction>;
}