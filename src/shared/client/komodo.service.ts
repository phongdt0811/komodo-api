import * as bitcoin from 'bitcoinjs-lib';
import { Exception } from '../error/exception';
import { KomodoClient } from './komodo.client';

export class KomodoService {
    async createAccount() {
        try {
          const keypair = bitcoin.ECPair.makeRandom();
          const { address } = bitcoin.payments.p2pkh({ pubkey: keypair.publicKey, network: KomodoClient.network });
    
          if (keypair.privateKey) {
            return {
                addr: address,
                privkey: keypair.privateKey.toString('hex'),
              }
          } else {
              throw new Exception("Create wallet fail");
          }
          
          return address as string;
        } catch (err) {
          throw err;
        }
      }
    
}