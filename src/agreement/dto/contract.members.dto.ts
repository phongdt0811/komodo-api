export class ContractMenbers {
    /** the seller (aka initiator) pubkey of the contract  */
    seller?: string;

    /** the client (aka signer) pubkey of the contract  */
    client?: string;

    /** the arbitrator of the contract, if they are specified  */
    arbitrator?: string;
}