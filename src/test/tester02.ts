console.log('tester 02');

import * as tester from '../index';
import { KomodoNode } from "../komodo/komodo.node";

const assets = {
    pubkey: '02879637242031f271031110aa74c008a918b37f0ba26086620db2229456fdc014',
    address: 'RH1vo4rJryi5MRAXJGwirbEwXTXDe3b1B6',
    privkey: 'UxCramCRQae9KnkFmDAJ88LdqmuYPAXBVxDRmAGRg4fHbgBAZLaA'
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
    /* sell a token */
    return tester.token.tokenCreate('Profile01', 0.00001, 'Profile tester 01')
        .then( result => {
            console.log('token:', result);
            if(result.result === 'error') throw new Error();
            return tester.transaction.sendRawTransaction(result.hex);
        })
        .then(tx => {
            console.log('tx:', tx);
        })
        .catch(err => {
            console.error(err);
        })
})();
