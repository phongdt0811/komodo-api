console.log('seller');

import * as seller from '../index';

const sellerPubkey = "036be72b704719dfc60661677b8de576bf17108ec3956fc4cfba725b5ddb062f9b";
const sellerAddress = "RS6wupov6jdmvkbyNP1HgUDNGGHMDCCjVC";

seller.setNode({
    rpcName: "phucnh",
    rpcPassword: "123",
    nodeIp: "http://127.0.0.1",
    nodePort: "8080",
    chainName: "HELLOWORLD"
});

function sendTransaction(hex: string) {
    seller.transaction.sendRawTransaction(hex).then(console.log)
}

function createToken() {
    seller.token.tokenCreate("Test", 0.00000001, "aaaa").then(result => {
        sendTransaction(result.hex);
    })
}

createToken()