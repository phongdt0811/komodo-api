console.log('tester 03');

import * as tester from '../index';
import { KomodoNode } from "../komodo/komodo.node";

const assets = {
    pubkey: '',
    address: '',
    privkey: ''
}

tester.setNode({
    rpcName: "user2111365722",
    rpcPassword: "passa1d83fda7e0fc74060ef31fbcd8a65df9fb2cb165339927a5b902db04c6c8d163a",
    nodeIp: "http://127.0.0.1",
    nodePort: "17603",
    chainName: "VLB1"
});

function getAccountAddress() {
    return tester.token.tokenAddress();
}

function getPrivateKey(address: string) {
    return tester.wallet.dumpprivkey(address);
}

function getPublickey(address: string) {
    return tester.wallet.validateaddress(address);
}

( async ()=> {
    /* get address */
    const tokenAddress = await getAccountAddress();
    if(!tokenAddress) throw 'Error can not get address';
    console.log(`ADDRESS: ${tokenAddress.myaddress}`);
    /* get privatekey */
    const privkey = await getPrivateKey(tokenAddress.myaddress);
    if(!privkey) throw 'Error can not get address';
    console.log(`PRIVATE KEY: ${privkey}`);
    /* get pubkey */

    const pubkeyObj = await getPublickey(tokenAddress.myaddress);
    if(!pubkeyObj) throw 'Error can not get address';
    console.log(pubkeyObj);
    console.log(`PUBLIC key: ${pubkeyObj.pubkey}`)
})();
