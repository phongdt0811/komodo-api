console.log('tester 03');

import * as tester from '../index';
import { KomodoNode } from "../komodo/komodo.node";

const assets = {
    pubkey: '0207d95c1427dfebca4a0231af2c83ce1c94ced82295d22015696368ae65bf131f',
    address: 'R9uAghSBvhKFt5HrvDVeWYuy9TL3bdFopf',
    privkey: 'UpYqix7pFDvnT7qAk2eMgGcq3nT8xMptepoMiF4Co3RRyyT7THGJ'
}

tester.setNode({
    rpcName: "user652603229",
    rpcPassword: "pass119d2b849e48b1385425943155081b4c250e6a36c96c28bc3130c4bd9b860ca42b",
    nodeIp: "http://127.0.0.1",
    nodePort: "14166",
    chainName: "VLTEST"
});

const getAccountAddress = async () => {
    console.log(KomodoNode.node);
    return tester.wallet.getAccountAddress(KomodoNode.node.rpcName);
}

function getAgreement(agreementtxid: string) {
    tester.agreement.agreementInfo(agreementtxid).then(console.log);
}

const listToken = () => {
    return tester.token.tokenCollection();
}

const getTokenInfo = (tokenId: string) => {
    return tester.token.tokenInfo(tokenId);
}
( async ()=> {
    const address = await getAccountAddress();
    console.log(address, address===assets.address);
    if(address!==assets.address) return;
    /* sell a token */
    const tokens = await listToken();
    console.log(tokens);
    let tokenInfo;
    for(let token of tokens){
        tokenInfo = await getTokenInfo(token);
        console.log(tokenInfo);
    }
    // return getAgreement("4a27cce8739053ea9bc33b6c37125ee3dd37700fb65b740ceb04b4fe671c5a85");
})();
