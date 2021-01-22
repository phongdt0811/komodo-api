import { RpcClient } from "../shared/rpc/rpc-client";
import { KomodoNode } from "./komodo.node";

export class KomodoRPC {
    public static readonly client: RpcClient = new RpcClient();
}