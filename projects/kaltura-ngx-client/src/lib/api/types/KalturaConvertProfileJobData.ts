
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaConvertProfileJobDataArgs  extends KalturaJobDataArgs {
    inputFileSyncLocalPath? : string;
	thumbHeight? : number;
	thumbBitrate? : number;
}


export class KalturaConvertProfileJobData extends KalturaJobData {

    inputFileSyncLocalPath : string;
	thumbHeight : number;
	thumbBitrate : number;

    constructor(data? : KalturaConvertProfileJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConvertProfileJobData' },
				inputFileSyncLocalPath : { type : 's' },
				thumbHeight : { type : 'n' },
				thumbBitrate : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaConvertProfileJobData'] = KalturaConvertProfileJobData;