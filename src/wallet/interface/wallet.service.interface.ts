export interface IWalletService {
    /**
     * The method signs a message via the private key of an address.
     * @param address the address to use for the private key
     * @param message the message
     * @returns the signature of the message encoded in base 64
     */
    signMessage(address: string, message: string): Promise<string>;
    getAccountAddress(name: string): Promise<string>;

    /**
     * The method signs a message via the private key of an address.
     * @param from the address to use for the private key
     * @param to the address to use
     * @param coins number coins to send
     * @param comment the comment for transaction
     * @param level the number of level of KYC 
     * @returns result true/false to check success or not
     */
    moveCoins(from: string, to: string, coins: number, comment: string, level?: number): Promise<boolean>;
}