import { ContractStatus } from "../enum/contract.status.enum";
import { ProposalStatus } from "../enum/proposal-status.enum";
import { ProposalType } from "../enum/proposal-type.enum";
import { ContractClosureData } from "./contract-closure.dto";
import { ContractData } from "./contract-data.dto";
import { ContractUpdateData } from "./contract-update-data.dto";
import { ContractMenbers } from "./contract.members.dto";
import { ProposalData } from "./proposal-data.dto";
import { ProposalMembers } from "./proposal-members.dto";

export class AgreementInfo  {
    /** whether the command executed successfully */
    result!: string;

    /** ID of the transaction being examined */
    txid!: string;

    /** the type of the transaction being examined. There are 7 types of transactions in Agreements: proposals, contracts, updates, closures, disputes, dispute resolutions and deposit unlock transactions. */
    type!: any;

    /** the type of proposal. There are three types: contract_create, contract_update and contract_close */
    proposal_type?: ProposalType;

    /** the contract ID  */
    contract_txid?: string;
    members?: ProposalMembers | ContractMenbers;

    /** the status of the proposal. There are 5 types of status for proposals: open, updated, accepted, closed or draft (for proposals with no receiver) 
     * OR the current status of the contract. There are 6 types of statuses:
        active - contract is active and has not received updates / revisions
        updated - contract is active and has been updated / revised at least once
        closed - contract has been closed by the members of the agreement
        suspended - contract is in dispute and is awaiting the arbitrator's verdict. No other operations (except Pawnshop settlements linked to the agreement without the PTF_REQUIREUNLOCK flag) can be done on the agreement while it is suspended
        arbitrated - contract has been closed by the arbitrator after a dispute resolution
        in settlement - contract's deposit has been unlocked by an unlock transaction and sent to a specific Pawnshop instance - track the status of the instance to determine whether the settlement is successful
    */
    status?: ProposalStatus | ContractStatus;

    /** the txid of the transaction that supersedes this one. If the proposal is updated, accepted or closed, this parameter will display the ID of the updated proposal, contract, or proposal closure transactions respectively. */
    next_txid?: string;

    /** the txid of the proposal transaction that was superseded by this one.  */
    previous_txid?: string;

    /** information specified by the sender at the time of this proposal's creatio 
     * OR info pulled from the contract's accepted_txid proposal and subsequent updates
    */
    data?: ProposalData | ContractData | ContractUpdateData | ContractClosureData;

    /** the pubkey that created and signed this transaction  */
    source_pubkey?: string;

    /** the txid of the accepted proposal for this contract */
    accepted_txid?: string;

    /** the deposit amount (in satoshis) currently or previously held in the deposit escrow */
    deposit?: number;

    /** txid of the latest transaction that has changed the contract's status. Not shown when the status is active */
    last_txid?: string;

    /** ID of the proposal */
    proposal_txid?: string;

    /** sha256 data hash of the dispute */
    data_hash?: string;

    /** pubkey that the arbitrator has chosen to send the deposit to */
    rewarded_pubkey?: string;

    /** the Pawnshop instance ID that the deposit was sent to. */
    dest_pawnshop_txid?: string;

    /** amount of deposit (in satoshis) that was sent to the Pawnshop instance */
    deposit_sent?: number;

    /** amount of deposit (in satoshis) that was returned back to the client of the agreement */
    deposit_refunded?: number;

    /** the total amount of deposit that was allocated to the agreement's deposit escrow */
    total_deposit?: number;
    
}