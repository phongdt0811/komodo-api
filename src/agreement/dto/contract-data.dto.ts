export class ContractData {
    /** ID of the master contract that this contract is a subcontract of */
    master_contract_txid?: string;

    /** the amount of revisions this contract has in total. NOTE: a new contract will start with 1 revision, and any updates (including contract closures) will increase the revision count by 1 */
    revisions?: number;

    /** the current arbitrator fee (how much needs to be paid to file a dispute, in satoshis) of the contract */
    arbitrator_fee?: number;

    /** the current name of the contract */
    latest_name?: string;

    /** the latest sha256 data hash of the contract */
    latest_data_hash?: string;
}