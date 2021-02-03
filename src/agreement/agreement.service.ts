import { KomodoRepository } from "../komodo/komodo.repository";
import { Transaction } from "../transaction/dto/transaction.dto";
import { AgreementAddress } from "./dto/agreement-address.dto";
import { AgreementInfo } from "./dto/agreement-info.dto";
import { Inventory } from "./dto/inventory.dto";
import { Proposals } from "./dto/proposals.dto";
import { IAgreementService } from "./interface/agreement.service.interface";

export class AgreementService implements IAgreementService {
    async agreementAddress(pubkey: string): Promise<AgreementAddress> {
        const res = await KomodoRepository.agreementRepository.agreementAddress(pubkey);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async agreementInfo(txid: string): Promise<AgreementInfo> {
        const res = await KomodoRepository.agreementRepository.agreementInfo(txid);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async agreementInventory(pubkey?: string): Promise<Inventory> {
        const res = await KomodoRepository.agreementRepository.agreementInventory(pubkey);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async agreementList(filtertype?: string, filtertxid?: string): Promise<string[]> {
        const res = await KomodoRepository.agreementRepository.agreementList(filtertype, filtertxid);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async agreementProposals(agreementtxid?: string, pubkey?: string): Promise<Proposals> {
        const res = await KomodoRepository.agreementRepository.agreementProposals(agreementtxid);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async agreementSettlements(agreementtxid: string, active_only: boolean): Promise<string[]> {
        const res = await KomodoRepository.agreementRepository.agreementSettlements(agreementtxid, active_only);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async agreementSubContracts(agreementtxid: string): Promise<string[]> {
        const res = await KomodoRepository.agreementRepository.agreementSubContracts(agreementtxid);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async agreementUpdateLog(agreementtxid: string, start_backwards: boolean, num_samples?: number): Promise<string[]> {
        const res = await KomodoRepository.agreementRepository.agreementUpdateLog(agreementtxid, start_backwards, num_samples);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async agreementAccept(proposaltxid: string): Promise<Transaction> {
        const res = await KomodoRepository.agreementRepository.agreementAccept(proposaltxid);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async agreementClose(agreementtxid: string, agreementhash: string, depositcut?: number, agreementname?: string, payment?: number): Promise<Transaction> {
        const res = await KomodoRepository.agreementRepository.agreementClose(agreementtxid, agreementhash, depositcut, agreementname, payment);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async agreementCreate(destpub: string, agreementname: string, agreementhash: string, deposit: number, arbitratorpub?: string | number, disputefee?: number, refagreementtxid?: string, payment?: number): Promise<Transaction> {
        let defaultFee = "0.0001";
        let paymentString = "0";
        let depositString = defaultFee; // at least fee 0.0001
        let disputefeeString = "0"
        let arbitratorpubString: string | undefined = arbitratorpub?.toString();

        if (payment) {
            paymentString = payment.toString();
        }
        if (deposit) {
            depositString = deposit.toString();
        }
        if (disputefee) {
            disputefeeString = disputefee.toString();
        }
        if(arbitratorpub !== '' && arbitratorpub !== 0) {
            disputefeeString = defaultFee;
        } else {
            arbitratorpubString = '';
        }

        const res = await KomodoRepository.agreementRepository.agreementCreate(destpub, agreementname, agreementhash, depositString, arbitratorpubString, disputefeeString, refagreementtxid, paymentString);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async agreementDispute(agreementtxid: string, disputeinfo?: string, bFinalDispute?: boolean): Promise<Transaction> {
        const res = await KomodoRepository.agreementRepository.agreementDispute(agreementtxid, disputeinfo, bFinalDispute);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async agreementResolve(disputetxid: string, depositcut: number, resolutioninfo?: string): Promise<Transaction> {
        const res = await KomodoRepository.agreementRepository.agreementResolve(disputetxid, depositcut, resolutioninfo);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async agreementStopProposal(proposaltxid: string): Promise<Transaction> {
        const res = await KomodoRepository.agreementRepository.agreementStopProposal(proposaltxid);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async agreementUnlock(agreementtxid: string, pawnshoptxid: string): Promise<Transaction> {
        const res = await KomodoRepository.agreementRepository.agreementUnlock(agreementtxid, pawnshoptxid);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    async agreementUpdate(agreementtxid: string, agreementhash: string, agreementname?: string, payment?: number): Promise<Transaction> {
        const res = await KomodoRepository.agreementRepository.agreementUpdate(agreementtxid, agreementhash, agreementname, payment);
        if (res.error) {
            throw new Error(res.error.message)
        } else {
            if (res.result) {
                return res.result
            } else {
                throw new Error("Cannot found result");
            }
        }
    }
    
}