import { AddressService } from "../address/address.service";
import { IAddressService } from "../address/interface/address.service.interface";
import { AgreementService } from "../agreement/agreement.service";
import { IAgreementService } from "../agreement/interface/agreement.service.interface";
import { ControlService } from "../control/control.service";
import { IControlService } from "../control/interface/control.service.interface";
import { IPawnshopService } from "../pawnshop/interface/pawshop.service.interface";
import { PawnshopService } from "../pawnshop/pawnshop.service";
import { ITokenService } from "../token/interface/token.service.interface";
import { TokenService } from "../token/token.service";
import { ITransactionService } from "../transaction/interface/transaction.service.interface";
import { TransactionService } from "../transaction/transaction.service";
import { IUtilService } from "../util/interface/util.service.interface";
import { UntilService } from "../util/util.service";
import { IWalletService } from "../wallet/interface/wallet.service.interface";
import { WalletService } from "../wallet/wallet.service";

export class KomodoService {
    public static readonly transactionService: ITransactionService = new TransactionService();
    public static readonly addressService: IAddressService = new AddressService();
    public static readonly tokenService: ITokenService = new TokenService();
    public static readonly pawnshopService: IPawnshopService = new PawnshopService();
    public static readonly utilService: IUtilService = new UntilService();
    public static readonly walletService: IWalletService = new WalletService();
    public static readonly agreementService: IAgreementService = new AgreementService();
    public static readonly controlService: IControlService = new ControlService();
}