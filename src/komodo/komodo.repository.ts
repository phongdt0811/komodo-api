import { AddressRepository } from "../address/address.repository";
import { IAddressRepository } from "../address/interface/address.repository.interface";
import { AgreementRepository } from "../agreement/agrement.repository";
import { IAgreementRepository } from "../agreement/interface/agreement.repository.interface";
import { ControlRepository } from "../control/control.repository";
import { IControlRepository } from "../control/interface/control.repository.interface";
import { IPawnshopRepository } from "../pawnshop/interface/pawshop.repository.interface";
import { PawshopRepository } from "../pawnshop/pawnshop.repository";
import { ITokenRepository } from "../token/interface/token.repository.interface";
import { TokenRepository } from "../token/token.repository";
import { ITransactionRepository } from "../transaction/interface/transaction.repository.interface";
import { TransactionRepository } from "../transaction/transaction.repository";
import { IUtilRepository } from "../util/interface/util.repository";
import { UtilRepository } from "../util/util.repository";
import { IWalletRepository } from "../wallet/interface/wallet.repository.interface";
import { WalletRepository } from "../wallet/wallet.repository";
import { IKYCRepository } from "../KYC/interface/kyc.repository.interface";
import { KYCRepository } from "../KYC/kyc.repository";

import { IFaucetRepository } from "../faucet/interface/faucet.repository.interface";
import { FaucetRepository } from "../faucet/faucet.repository";

export class KomodoRepository {

    public static readonly transactionRepository: ITransactionRepository = new TransactionRepository();
    public static readonly addressRepository: IAddressRepository = new AddressRepository();
    public static readonly tokenRepository: ITokenRepository = new TokenRepository();
    public static readonly pawnshopRepository: IPawnshopRepository = new PawshopRepository();
    public static readonly utilRepository: IUtilRepository = new UtilRepository();
    public static readonly walletRepository: IWalletRepository = new WalletRepository();
    public static readonly agreementRepository: IAgreementRepository = new AgreementRepository();
    public static readonly controlRepository: IControlRepository = new ControlRepository();
    public static readonly kycRepositoty: IKYCRepository = new KYCRepository();
    public static readonly faucetRepositoty: IFaucetRepository = new FaucetRepository();

}