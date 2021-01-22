import { RPCResponse } from "../../shared/rpc/rpc-response.dto";
import { Information } from "../dto/infomation.dto";
import { MiningInfo } from "../dto/mining-info.dto";

export interface IControlRepository {
    getInfo(): Promise<RPCResponse<Information>>
    setGenerate(generate: boolean, genproclimit?: number): Promise<RPCResponse<any>>;
    getMininginfo(): Promise<RPCResponse<MiningInfo>>;
}