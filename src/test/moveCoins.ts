console.log('move coins 01');

import * as tester from '../index';
import { KomodoNode } from "../komodo/komodo.node";

const assets = {
    pubkey: '02e4e93086ae2be2bb32f4b4e4f17b574d7528ccccaf0ffb1a16cc1e8bea0581bc',
    address: 'RS4kUgx63PixspG2bgdkH1xuDgnZqefMAV',
    privkey: 'UtrXSv1WwAeHuqLskwTmAzRv5NkDhGTeHzNtjSVNcKmrAQ4N7hi8'
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
