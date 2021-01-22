import axios, { AxiosRequestConfig } from "axios"
import { KomodoNode } from "../../komodo/komodo.node";
import { Exception } from "../error/exception";
import { Buffer } from "buffer"

export class RpcClient {
    async rpcRequest(method: string, ...args: any[]) {
        if (!this.tryNode()) {
            throw new Exception("Please set rpc node");
        }
        args = args.filter(arg => arg !== undefined);
        //args = args.map(arg => arg.toString());
        const { chainName, rpcPassword, nodeIp, nodePort, rpcName } = KomodoNode.node;
        const config: AxiosRequestConfig = {
            method: 'POST',
            url: `${nodeIp}:${nodePort}`,
            headers: { 
              'content-type': 'application/json', 
              'Authorization': `Basic ${Buffer.from(rpcName + ':' + rpcPassword).toString('base64')}`
            },
            data : {
                "jsonrpc": "1.0",
                "id": chainName,
                "method": method,
                params: args
            }
        };
        return axios(config).then(response => response.data).catch(error => {
            console.log("error")
            console.log(error.response.data);
            if (error.response && error.response.data) {
                return error.response.data
            } else {
                throw error
            }
        });
    }

    tryNode(): boolean {
        if (!KomodoNode.node) {
            return false;
        }
        if (!KomodoNode.node.nodeIp.includes('http://')) {
            KomodoNode.node.nodeIp = `http://${KomodoNode.node.nodeIp}`
        }
        return true;
    }
}