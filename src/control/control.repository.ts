import { KomodoRPC } from "../komodo/komodo.rpc";
import { RPCResponse } from "../shared/rpc/rpc-response.dto";
import { Information } from "./dto/infomation.dto";
import { MiningInfo } from "./dto/mining-info.dto";
import { IControlRepository } from "./interface/control.repository.interface";

export class ControlRepository implements IControlRepository {
    async getMininginfo(): Promise<RPCResponse<MiningInfo>> {
        const result: RPCResponse<MiningInfo> = await KomodoRPC.client.rpcRequest("getmininginfo");
        return result;
    }
    async getInfo(): Promise<RPCResponse<Information>> {
        const result: RPCResponse<Information> = await KomodoRPC.client.rpcRequest("getinfo");
        return result;
    }
    async setGenerate(generate: boolean, genproclimit?: number): Promise<RPCResponse<any>> {
        const result: RPCResponse<any> = await KomodoRPC.client.rpcRequest("setgenerate", generate, genproclimit);
        return result;
    }
}