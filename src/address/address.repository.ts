import { KomodoRPC } from "../komodo/komodo.rpc";
import { RPCResponse } from "../shared/rpc/rpc-response.dto";
import { Balance } from "./dto/balance.dto";
import { UnspentTransactionOutput } from "./dto/utxos.dto";
import { IAddressRepository } from "./interface/address.repository.interface";

export class AddressRepository implements IAddressRepository {
    async getAddressBalance(address: string): Promise<RPCResponse<Balance>> {
        const addresses = {
            addresses: [address]
        }
        const result: RPCResponse<any> = await KomodoRPC.client.rpcRequest("getaddressbalance", addresses);
        return result;
    }
    async getAddressUtxos(address: string): Promise<RPCResponse<UnspentTransactionOutput>> {
        const addresses = {
            addresses: [address]
        }
        const result: RPCResponse<any> = await KomodoRPC.client.rpcRequest("getaddressutxos", addresses);
        return result;
    }
    
}