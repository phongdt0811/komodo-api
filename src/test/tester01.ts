console.log('tester 01');

import * as tester from '../index';
import { KomodoNode } from "../komodo/komodo.node";

// const assets = {
//     pubkey: '0207d95c1427dfebca4a0231af2c83ce1c94ced82295d22015696368ae65bf131f',
//     address: 'RPtckiKon12EGV9LHhbmx6d6pwTJUKfe5k',
//     privkey: 'UpYqix7pFDvnT7qAk2eMgGcq3nT8xMptepoMiF4Co3RRyyT7THGJ'
// }

// tester.setNode({
//     rpcName: "user652603229",
//     rpcPassword: "pass119d2b849e48b1385425943155081b4c250e6a36c96c28bc3130c4bd9b860ca42b",
//     nodeIp: "http://127.0.0.1",
//     nodePort: "14166",
//     chainName: "VLTEST"
//});

const assets = {
    pubkey: '025244b919c381ca9ed90d52f2ac94fe6d54fe3d438535cdca41b647011e1dcd39',
    address: 'RTAvka2vG3VFf54PWn3oVydDwiZX6oyjx4',
    privkey: 'UpYqix7pFDvnT7qAk2eMgGcq3nT8xMptepoMiF4Co3RRyyT7THGJ'
}

tester.setNode({
    rpcName: "user3392377082",
    rpcPassword: "passd315bc2db250b175564f1ff92dfc12f5bc988f4bcaf2af298536ed162d8eaf9ea1",
    nodeIp: "http://127.0.0.1",
    nodePort: "11578",
    chainName: "STAGINGTEST"
});

const getAccountAddress = async () => {
    console.log(KomodoNode.node);
    return tester.wallet.getAccountAddress(KomodoNode.node.rpcName);
}


( async ()=> {
    const address = await getAccountAddress();
    console.log(address, address===assets.address);
    // if(address!==assets.address) return;
    /* sell a token */
    // return;
    // return tester.token.tokenCreate('Profile01', 0.00000001, 'Profile tester 01')
    //     .then( result => {
    //         if(result.result === 'error') throw new Error();
    //         console.log('token:', result);
    //         return tester.transaction.sendRawTransaction(result.hex);
    //     })
    //     .then(tx => {
    //         console.log('tx:', tx);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     })
    const txid = await tester.kyc.sendCoins(address, 0.00001, "testing send coinds");
    console.log(txid);
})();
