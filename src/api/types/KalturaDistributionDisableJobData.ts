
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionUpdateJobData, KalturaDistributionUpdateJobDataArgs } from './KalturaDistributionUpdateJobData';

export interface KalturaDistributionDisableJobDataArgs  extends KalturaDistributionUpdateJobDataArgs {
    
}


export class KalturaDistributionDisableJobData extends KalturaDistributionUpdateJobData {

    

    constructor(data? : KalturaDistributionDisableJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionDisableJobData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionDisableJobData',KalturaDistributionDisableJobData);
