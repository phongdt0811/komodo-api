import { RpcNode } from "../shared/rpc/rpc-node";

export class KomodoNode {
    public static node: RpcNode;

    static setNode(node: RpcNode) {
        this.node = node;
    }
}