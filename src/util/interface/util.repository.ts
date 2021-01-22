import { RPCResponse } from "../../shared/rpc/rpc-response.dto";
import { AddressValidate } from "../dto/address.validate";

export interface IUtilRepository {
    /**
     * 
     * @param address the address to validate
     */
    validateaddress(address: string): Promise<RPCResponse<AddressValidate>>;

    /**
     * The method verifies a signed message.
     * @param address 
     * @param signature 
     * @param message 
     */
    verifyMessage (address: string, signature: string, message: string): Promise<RPCResponse<boolean>>;
}