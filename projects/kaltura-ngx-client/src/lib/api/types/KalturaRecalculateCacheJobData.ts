
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaRecalculateCacheJobDataArgs  extends KalturaJobDataArgs {
    
}


export class KalturaRecalculateCacheJobData extends KalturaJobData {

    

    constructor(data? : KalturaRecalculateCacheJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRecalculateCacheJobData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRecalculateCacheJobData'] = KalturaRecalculateCacheJobData;