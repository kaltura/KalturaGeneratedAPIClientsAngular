
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaString } from './KalturaString';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaConcatJobDataArgs  extends KalturaJobDataArgs {
    srcFiles? : KalturaString[];
	destFilePath? : string;
	flavorAssetId? : string;
	offset? : number;
	duration? : number;
	concatenatedDuration? : number;
}


export class KalturaConcatJobData extends KalturaJobData {

    srcFiles : KalturaString[];
	destFilePath : string;
	flavorAssetId : string;
	offset : number;
	duration : number;
	concatenatedDuration : number;

    constructor(data? : KalturaConcatJobDataArgs)
    {
        super(data);
        if (typeof this.srcFiles === 'undefined') this.srcFiles = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConcatJobData' },
				srcFiles : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' },
				destFilePath : { type : 's' },
				flavorAssetId : { type : 's' },
				offset : { type : 'n' },
				duration : { type : 'n' },
				concatenatedDuration : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConcatJobData',KalturaConcatJobData);
