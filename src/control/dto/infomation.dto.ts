export class Information {
    version!: number;
    protocolversion!: number;
    KMDversion!: string;
    synced!: boolean;
    notarized!: number;
    prevMoMheight!: number;
    notarizedhash!: string;
    notarizedtxid!: string;
    notarizedtxid_height!: number;
    KMDnotarized_height!: number;
    notarized_confirms!: number;
    walletversion!: number;
    balance!: number;
    blocks!: number;
    longestchain!: number;
    tiptime!: number;
    difficulty!: number;
    keypoololdest!: number;
    keypoolsize!: number;
    paytxfee!: number;
    sapling!: number;
    timeoffset!: number;
    connections!: number;
    proxy!: string;
    testnet!: boolean;
    relayfee!: number;
    errors!: string;
    pubkey!: string;
    CCid!: number;
    name!: string;
    p2pport!: number;
    rpcport!: number;
    magic!: number;
}