
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionJobData, KalturaDistributionJobDataArgs } from './KalturaDistributionJobData';

export interface KalturaDistributionUpdateJobDataArgs  extends KalturaDistributionJobDataArgs {
    
}


export class KalturaDistributionUpdateJobData extends KalturaDistributionJobData {

    

    constructor(data? : KalturaDistributionUpdateJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionUpdateJobData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionUpdateJobData',KalturaDistributionUpdateJobData);
