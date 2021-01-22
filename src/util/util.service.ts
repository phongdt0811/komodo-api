import { KomodoRepository } from "../komodo/komodo.repository";
import { AddressValidate } from "./dto/address.validate";
import { IUtilService } from "./interface/util.service.interface";

export class UntilService implements IUtilService {
    async verifyMessage(address: string, signature: string, message: string): Promise<boolean> {
        const res = await KomodoRepository.utilRepository.verifyMessage(address, signature, message);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result !== null && res.result !== undefined) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async validateaddress(address: string): Promise<AddressValidate> {
        const res = await KomodoRepository.utilRepository.validateaddress(address);
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