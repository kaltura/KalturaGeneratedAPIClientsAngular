
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaRecalculateCacheJobData',KalturaRecalculateCacheJobData);
