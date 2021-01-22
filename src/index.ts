import { IAddressService } from "./address/interface/address.service.interface";
import { IAgreementService } from "./agreement/interface/agreement.service.interface";
import { IControlService } from "./control/interface/control.service.interface";
import { KomodoNode } from "./komodo/komodo.node";
import { KomodoService } from "./komodo/komodo.service";
import { IPawnshopService } from "./pawnshop/interface/pawshop.service.interface";
import { RpcNode } from "./shared/rpc/rpc-node";
import { ITokenService } from "./token/interface/token.service.interface";
import { ITransactionService } from "./transaction/interface/transaction.service.interface";
import { IUtilService } from "./util/interface/util.service.interface";
import { IWalletService } from "./wallet/interface/wallet.service.interface";

export function setNode(node: RpcNode) {
  KomodoNode.setNode(node);
  return true;
}

export const token: ITokenService = KomodoService.tokenService;
export const transaction: ITransactionService = KomodoService.transactionService;
export const address: IAddressService = KomodoService.addressService;
export const pawnshop: IPawnshopService = KomodoService.pawnshopService;
export const util: IUtilService = KomodoService.utilService;
export const wallet: IWalletService = KomodoService.walletService;
export const agreement: IAgreementService = KomodoService.agreementService;
export const control: IControlService = KomodoService.controlService;
