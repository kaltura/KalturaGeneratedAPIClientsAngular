
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
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

typesMappingStorage['KalturaDistributionUpdateJobData'] = KalturaDistributionUpdateJobData;