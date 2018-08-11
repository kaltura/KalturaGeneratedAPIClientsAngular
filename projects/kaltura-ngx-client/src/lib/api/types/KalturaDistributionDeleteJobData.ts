
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionJobData, KalturaDistributionJobDataArgs } from './KalturaDistributionJobData';

export interface KalturaDistributionDeleteJobDataArgs  extends KalturaDistributionJobDataArgs {
    keepDistributionItem? : boolean;
}


export class KalturaDistributionDeleteJobData extends KalturaDistributionJobData {

    keepDistributionItem : boolean;

    constructor(data? : KalturaDistributionDeleteJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionDeleteJobData' },
				keepDistributionItem : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDistributionDeleteJobData'] = KalturaDistributionDeleteJobData;