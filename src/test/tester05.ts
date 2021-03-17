console.log('tester 05');
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

async function isSynced() {
    const result = await tester.control.getInfo();
    return result?.synced;
}

async function getfreecoins() {
    const result = await tester.faucet.faucetget();
    return result;
}

( async ()=> {
    let status = await isSynced();
    if(!status) { 
        console.log('Node havent synced yet');
        return 0;
    }
    console.log('Node synced');
    // # wait execute 30s
    const res = await getfreecoins();
    console.log(res);
    // Notes: always return res
    const result = await tester.transaction.sendRawTransaction(res.hex);
    // Got error:  result: null => Only for new user and got once
    console.log(result);
})();
