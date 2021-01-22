export class ContractClosureData {
    /** the revision number of this update */
    revision?: string;

    /** New name for the contract added by this update */
    name?: string;

    /** New data hash for the contract added by this update */
    data_hash?: string;

    /** amount of deposit (in satoshis) that was sent to the sender of the proposal */
    deposit_for_sender?: number;

    /** amount of deposit (in satoshis) that was sent to the receiver of the proposal */
    deposit_for_receiver?: number;

    /** the total amount of deposit that was allocated to the agreement's deposit escrow  */
    total_deposit?: number;
}