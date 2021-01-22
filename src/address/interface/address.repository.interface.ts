import { RPCResponse } from "../../shared/rpc/rpc-response.dto";
import { Balance } from "../dto/balance.dto";
import { UnspentTransactionOutput } from "../dto/utxos.dto";

export interface IAddressRepository {
    /**
     * The method returns the confirmed balance for an address, or addresses. It requires addressindex to be enabled.
     * @param address the address
     */
    getAddressBalance(address: string): Promise<RPCResponse<Balance>>;

    /**
     * The method returns all unspent outputs for an address. It requires addressindex to be enabled.
     * @param address the address
     */
    getAddressUtxos(address: string): Promise<RPCResponse<UnspentTransactionOutput>>;
}