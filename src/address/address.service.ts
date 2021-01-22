import { KomodoRepository } from "../komodo/komodo.repository";
import { Balance } from "./dto/balance.dto";
import { UnspentTransactionOutput } from "./dto/utxos.dto";

import { IAddressService } from "./interface/address.service.interface";

export class AddressService implements IAddressService {
    constructor() { }
    async getAddressBalance(address: string): Promise<Balance> {
        const res = await KomodoRepository.addressRepository.getAddressBalance(address);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async getAddressUtxos(address: string): Promise<UnspentTransactionOutput> {
        const res = await KomodoRepository.addressRepository.getAddressUtxos(address);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }

}