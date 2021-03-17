console.log('tester 03');

import * as tester from '../index';
import { KomodoNode } from "../komodo/komodo.node";

const assets = {
    pubkey: '',
    address: '',
    privkey: ''
}

tester.setNode({
    rpcName: "user1149789007",
    rpcPassword: "passcfa6f2339515b45ecd0b1a520d5cd9bf2a26a75401f3a34af56e1800d52b8f3350",
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
    console.log(`PUBLIC key: ${pubkeyObj.pubkey}`);
})();
