
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionJobData, KalturaDistributionJobDataArgs } from './KalturaDistributionJobData';

export interface KalturaDistributionSubmitJobDataArgs  extends KalturaDistributionJobDataArgs {
    
}


export class KalturaDistributionSubmitJobData extends KalturaDistributionJobData {

    

    constructor(data? : KalturaDistributionSubmitJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionSubmitJobData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionSubmitJobData',KalturaDistributionSubmitJobData);
