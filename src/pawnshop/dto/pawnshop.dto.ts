import { Status } from "../enum/status.enum";
import { Flags } from "./flags.dto";

export class Pawnshop {
    /**  whether the command executed successfully */
    result!: string;

    /** ID of the Pawnshop instance being examined */
    createtxid!: string;

    /** name of the Pawnshop instance */
    name!: string;

    /** pubkey of the token provider for this instance */
    token_supplier!: string;

    /** pubkey of the coin provider for this instance */
    coin_supplier!: number;

    /** transaction ID of an agreement in the blockchain this Pawnshop instance references, if it is defined */
    agreement_txid!: string;

    /** token ID of the tokens being exchanged */
    tokenid!: string;

    /** the amount of tokens that will be required for the exchange */
    required_tokens!: number;

    /** the amount of coins that will be required for the exchange */
    required_coins!: number;

    /** the current token balance in the instance's token escrow. Only shown if the instance is in open status */
    token_balance!: number;

    /** the current coin balance in the instance's coin escrow. Only shown if the instance is in open status */
    coin_balance!: number;

    /** the current status of the instance. */
    status!: Status;

    /** optional flags altering behavior & permissions for this Pawnshop instance */
    flags?: Flags;

    confirmations?: number;
    isValid?: boolean;
}