export interface IKYCService {
    getAccountAddress(name: string): Promise<string>;

    /**
     * The method signs a message via the private key of an address.
     * @param to the address to use
     * @param coins number coins to send
     * @param comment the comment for transaction
     * @param level the number of level of KYC 
     * @returns result true/false to check success or not
     */
    sendCoins(to: string, coins: number, comment: string, level?: number): Promise<string>;
}