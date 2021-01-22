export class ProposalMembers {
    /** the pubkey of the proposal's sender */
    sender?: string;

    /** the pubkey of the proposal's receiver, if they exist */
    receiver?: string;

    /** the pubkey of the arbitrator for the proposed agreement, if they exist. Only used in contract_create type proposals */
    arbitrator?: string;
}