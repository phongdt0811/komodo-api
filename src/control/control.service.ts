import { KomodoRepository } from "../komodo/komodo.repository";
import { Information } from "./dto/infomation.dto";
import { MiningInfo } from "./dto/mining-info.dto";
import { IControlService } from "./interface/control.service.interface";

export class ControlService implements IControlService {
    async getMininginfo(): Promise<MiningInfo> {
        const res = await KomodoRepository.controlRepository.getMininginfo();
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
    async getInfo(): Promise<Information> {
        const res = await KomodoRepository.controlRepository.getInfo();
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result;
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async setGenerate(generate: boolean, genproclimit?: number): Promise<any> {
        const res = await KomodoRepository.controlRepository.setGenerate(generate, genproclimit);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            return true;
        }
    }
    async getGenerate() {
        
    }
    
}