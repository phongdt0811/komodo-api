import { AddressValidate } from "../dto/address.validate";

export interface IUtilService {
    /**
     * The method returns information about the given address.
     * @param address the address to validate
     */
    validateaddress(address: string): Promise<AddressValidate>;

    /**
     * The method verifies a signed message.
     * @param address the address to use for the signature
     * @param signature the signature provided by the signer in base 64 encoding
     * @param message the message that was signed
     */
    verifyMessage (address: string, signature: string, message: string): Promise<boolean>;
}