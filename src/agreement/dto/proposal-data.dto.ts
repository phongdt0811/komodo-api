export class ProposalData {
    /** the amount of satoshis that the receiver must pay to the sender in order to accept this proposal  */
    required_payment?: number;

    /** the name of the proposed agreement */
    name?: string;

    /** the sha256 data hash of the proposed agreement */
    data_hash?: string;

    /** the proposed deposit for the agreement in satoshis, which the receiver must send to the deposit escrow in order to accept this proposal. This payment is separate from the required_payment amount. Only used in contract_create type proposals */
    deposit?: number;

    /** the proposed fee (in satoshis) that any member of the agreement will have to pay in order to file an agreement dispute. Only used in contract_create type proposals, if an arbitrator is specified */
    arbitrator_fee?: number;

    /** the txid of the contract that the new agreement will become a subcontract of. Only used in contract_create type proposals */
    master_contract_txid?: number;

    /** the proposed new arbitrator fee, in satoshis. Only used in contract_update type proposals */
    new_arbitrator_fee?: number;

    /** the current arbitrator fee, in satoshis. Only used in contract_update type proposals */
    current_arbitrator_fee?: number;

    /** how much deposit will be sent to the sender if this proposal is accepted. Only used in contract_close type proposals */
    deposit_for_sender?: number;

    /** how much deposit will be sent to the receiver if this proposal is accepted. Only used in contract_close type proposals */
    deposit_for_receiver?: number;

    /** the total amount of deposit allocated to the agreement's deposit escrow. Only used in contract_close type proposals */
    total_deposit?: number;
}