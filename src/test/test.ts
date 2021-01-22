import { create } from 'domain';
import * as komodo from '../index';

komodo.setNode({
    rpcName: "phucnh",
    rpcPassword: "123",
    nodeIp: "http://127.0.0.1",
    nodePort: "8080",
    chainName: "HELLOWORLD"
});

async function createToken() {
    const transaction = await komodo.token.tokenCreate(
        "Test token", 
        0.0000001, 
        "axabcd1234"
    );
    console.log(transaction);
    const txid = await komodo.transaction.sendRawTransaction(transaction.hex)
    console.log("transaction txid:", txid);
}

function getAddressBalance(address: string) {
    komodo.address.getAddressBalance(address).then(console.log);
}


function getAddress() {
    komodo.token.tokenAddress().then(console.log);
}

function getInfo() {
    komodo.control.getInfo().then(console.log);
}

function getMininginfo() {
    komodo.control.getMininginfo().then(console.log);
}

getMininginfo();