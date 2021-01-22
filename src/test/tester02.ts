console.log('tester 02');

import * as tester from '../index';
import { KomodoNode } from "../komodo/komodo.node";

const assets = {
    pubkey: '02d255eda78690c0769d9010f119ade96414b16317d95a4b813a9316015efeed8e',
    address: 'RCz4HqP3iHsNTcvvCNHxLMNj141tFTokvy',
    privkey: 'Ur8Z89XQiNV6ZuagV8YYcqCq8vbr2jr69dhUirxLvRvyAtDGQdqp'
}
tester.setNode({
    rpcName: "tp",
    rpcPassword: "123",
    nodeIp: "http://127.0.0.1",
    nodePort: "3002",
    chainName: "VL1"
});

const getAccountAddress = async () => {
    console.log(KomodoNode.node);
    return tester.wallet.getAccountAddress(KomodoNode.node.rpcName);
}
( async ()=> {
getAccountAddress()
    .then(address=>{
        console.log(address);
    })
    .catch(err => {
        console.error(err);
    }) 
})();