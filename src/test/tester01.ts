console.log('tester 01');

import * as tester from '../index';
import { KomodoNode } from "../komodo/komodo.node";

// tester.setNode({
//     rpcName: "tp",
//     rpcPassword: "123",
//     nodeIp: "http://127.0.0.1",
//     nodePort: "3001",
//     chainName: "VL"
// });
const assets = {
    pubkey: '02e5c3e400cb2d743831a9b39f51032c79a3e11454911a9b3e310482b8344a76c2',
    address: 'RWgSfafbf653pFV8YZrUYE3Aw7AcRoVKfe',
    privkey: 'UpYqix7pFDvnT7qAk2eMgGcq3nT8xMptepoMiF4Co3RRyyT7THGJ'
}

tester.setNode({
    rpcName: "user592088748",
    rpcPassword: "pass92ff2a1df60928221151a654cba74d58f6a05d44f39841c0f5b86284740638b958",
    nodeIp: "http://127.0.0.1",
    nodePort: "3002",
    chainName: "VL1"
});

const getAccountAddress = async () => {
    console.log(KomodoNode.node);
    return tester.wallet.getAccountAddress(KomodoNode.node.rpcName);
}
( async ()=> {
    const address = await getAccountAddress();
    console.log(address);
    /* sell a token */
    // return;
    return tester.token.tokenCreate('Profile01', 0.00000001, 'Profile tester 01')
        .then( result => {
            if(result.result === 'error') throw new Error();
            console.log('token:', result);
            return tester.transaction.sendRawTransaction(result.hex);
        })
        .then(tx => {
            console.log('tx:', tx);
        })
        .catch(err => {
            console.error(err);
        })
})();
