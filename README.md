./komodo-cli -regtest -ac_name=VL1

- getnewaddress <ACCOUNT> -> $address
- validateaddress $address -> $result->pubkey
- dumpprivkey $address -> $privkey

- tokencreate -> sendrawtransaction -> txid
- getrawmempool true -> [ txid ]
- getrawtransaction $txid 1 -> $data->txid
+ generate 1 -> clear mempool -> can get token info if not token still in mempool ???? why? -> need research -> OPRETURN -> transaction error
- tokeninfo $data->txid -> 
