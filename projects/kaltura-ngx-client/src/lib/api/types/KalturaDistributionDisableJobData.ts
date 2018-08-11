
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
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

typesMappingStorage['KalturaDistributionDisableJobData'] = KalturaDistributionDisableJobData;