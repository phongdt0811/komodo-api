export class Inventory {
    /** every agreement where the the specified pubkey is the seller (initiator) */
    seller!: string[];
    
    /** every agreement where the the specified pubkey is the client (receiver) */
    client!: string[];

    /** every agreement where the the specified pubkey is the arbitrator */
    arbitrator!: string[];
}