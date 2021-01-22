export class ContractUpdateData {
    /** the revision number of this update */
    revision?: string;

    /** the new arbitrator fee set by this update. Only shown if the contract has an arbitrator */
    arbitrator_fee?: number;

    /** New name for the contract added by this update */
    name?: string;

    /** New data hash for the contract added by this update */
    data_hash?: string;
}