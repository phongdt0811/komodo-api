export class KomodoClient {

    // Network setting for bitcoinjs-lib object
    public static network = {
      messagePrefix: '\u0018Bitcoin Signed Message:\n',
      bech32: 'bc',
      bip32: { public: 76067358, private: 76066276 },
      pubKeyHash:63,
      scriptHash: 64,
      wif: 128
    }
  }
  