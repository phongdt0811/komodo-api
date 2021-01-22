export class Proposals {
    /** every proposal where the the specified pubkey is the sender */
    sender!: string[];

    /** every proposal where the the specified pubkey is the receiver */
    receiver!: string[];

    /** every proposal where the the specified pubkey is the proposed arbitrator */
    arbitrator!: string[];
}