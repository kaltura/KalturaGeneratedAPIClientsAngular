
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConvartableJobData, KalturaConvartableJobDataArgs } from './KalturaConvartableJobData';

export interface KalturaPostConvertJobDataArgs  extends KalturaConvartableJobDataArgs {
    flavorAssetId? : string;
	createThumb? : boolean;
	thumbPath? : string;
	thumbOffset? : number;
	thumbHeight? : number;
	thumbBitrate? : number;
	customData? : string;
}


export class KalturaPostConvertJobData extends KalturaConvartableJobData {

    flavorAssetId : string;
	createThumb : boolean;
	thumbPath : string;
	thumbOffset : number;
	thumbHeight : number;
	thumbBitrate : number;
	customData : string;

    constructor(data? : KalturaPostConvertJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPostConvertJobData' },
				flavorAssetId : { type : 's' },
				createThumb : { type : 'b' },
				thumbPath : { type : 's' },
				thumbOffset : { type : 'n' },
				thumbHeight : { type : 'n' },
				thumbBitrate : { type : 'n' },
				customData : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPostConvertJobData',KalturaPostConvertJobData);
