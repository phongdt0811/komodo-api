import { Information } from "../dto/infomation.dto";
import { MiningInfo } from "../dto/mining-info.dto";

export interface IControlService {
    /**
     * The method returns an object containing various state info
     */
    getInfo(): Promise<Information>;

    /**
     * The method allows the user to set the generate property in the coin daemon to true or false, thus turning generation (mining/staking) on or off.
     * @param generate set to true to turn on generation; set to off to turn off generation
     * @param genproclimit set the processor limit for when generation is on; use value "-1" for unlimited, use value 0 for staking
     */
    setGenerate(generate: boolean, genproclimit?: number): Promise<any>;

    /**
     * The method returns a json object containing mining-related information
     */
    getMininginfo(): Promise<MiningInfo>;
}