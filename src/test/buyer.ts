import * as buyer from '../index';

buyer.setNode({
    rpcName: "phucnh",
    rpcPassword: "123",
    nodeIp: "http://127.0.0.1",
    nodePort: "14166",
    chainName: "HELLOWORLD"
});

const buyerPubkey = "02651fc7ca3e8682e08807642209b5bb7575a7e11414d5d6a4e5b3184d43b770ce";
const buyerAddress = "REAwXfV5yv6pG2gxYTiuevgNGe9uSeJggH";

buyer.setNode({
    rpcName: "user3916147568",
    rpcPassword: "passdd9558be8adb960b4407b63682fc769d12a34ea009dda0beed8ba87fbcb8ff10aa",
    nodeIp: "http://127.0.0.1",
    nodePort: "13835",
    chainName: "HELLOWORLD"
});


function getBalance() {
    buyer.address.getAddressBalance(buyerAddress).then(console.log);
}

function getAddress() {
    buyer.token.tokenAddress().then(console.log);
}

function getProposalInfo(proposalid: string) {
    buyer.agreement.agreementInfo(proposalid).then(console.log)
}

async function acceptProposal(proposalid: string) {
    const transaction = await buyer.agreement.agreementAccept(proposalid);
    const agreementtxid = await buyer.transaction.sendRawTransaction(transaction.hex);
    console.log(agreementtxid);
}


async function main() {
    //buyer.agreement.agreementInfo("acf91cd56d36a40eca876b32676c28241583076a29fd0829537aab0998dbbd7b").then(console.log);
    buyer.agreement.agreementAccept("acf91cd56d36a40eca876b32676c28241583076a29fd0829537aab0998dbbd7b").then(console.log);
}

function getAgreement(agreementtxid: string) {
    buyer.agreement.agreementInfo(agreementtxid).then(console.log);
}

getAgreement("2fbae2f772728788d5d6ff59666cd5ae308d3945713b0e27279d5337b318f73e")

//acceptProposal("5565a4728cad60611a855af709eb006a44c216d83c9929c5403fedfd22b1b8a4");