
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStorageJobData, KalturaStorageJobDataArgs } from './KalturaStorageJobData';

export interface KalturaStorageDeleteJobDataArgs  extends KalturaStorageJobDataArgs {
    
}


export class KalturaStorageDeleteJobData extends KalturaStorageJobData {

    

    constructor(data? : KalturaStorageDeleteJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStorageDeleteJobData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaStorageDeleteJobData',KalturaStorageDeleteJobData);
