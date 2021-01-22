export class AgreementAddress  {
    /** whether the command executed successfully */
    result!: string;

    /** taking the agreement contract's EVAL code as a modifier, this is the public address that corresponds to the agreement contract's privkey, also known as Agreements CC's global address */
    AgreementsCCaddress!: string;
    AgreementsCCBalance?: number;

    AgreementsNormalAddress?: string;
    AgreementsNormalBalance?: number;

    AgreementsCCTokensAddress?: string;
    "myCCAddress(Agreements)"?: string;
    "myCCbalance(Agreements)"?: number;

    /** taking the Agreements contract's EVAL code as a modifier, this is the Agreements Antara address from the pubkey of the user */
    myCCaddress!: string;

    /** the normal public address of the pubkey used to launch the chain */
    myaddress!: string;
}