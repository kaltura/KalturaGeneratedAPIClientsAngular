
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionUpdateJobData, KalturaDistributionUpdateJobDataArgs } from './KalturaDistributionUpdateJobData';

export interface KalturaDistributionEnableJobDataArgs  extends KalturaDistributionUpdateJobDataArgs {
    
}


export class KalturaDistributionEnableJobData extends KalturaDistributionUpdateJobData {

    

    constructor(data? : KalturaDistributionEnableJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionEnableJobData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionEnableJobData',KalturaDistributionEnableJobData);
