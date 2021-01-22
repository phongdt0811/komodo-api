import { KomodoRPC } from "../komodo/komodo.rpc";
import { RPCResponse } from "../shared/rpc/rpc-response.dto";
import { AddressValidate } from "./dto/address.validate";
import { IUtilRepository } from "./interface/util.repository";

export class UtilRepository implements IUtilRepository {
    async verifyMessage(address: string, signature: string, message: string): Promise<RPCResponse<boolean>> {
        const result: RPCResponse<boolean> = await KomodoRPC.client.rpcRequest("verifymessage", address, signature, message);
        return result;
    }
    async validateaddress(address: string): Promise<RPCResponse<AddressValidate>> {
        const result: RPCResponse<AddressValidate> = await KomodoRPC.client.rpcRequest("validateaddress", address);
        return result;
    }
    
}