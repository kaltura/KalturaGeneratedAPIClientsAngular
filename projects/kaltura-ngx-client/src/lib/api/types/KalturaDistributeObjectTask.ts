
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';

export interface KalturaDistributeObjectTaskArgs  extends KalturaObjectTaskArgs {
    distributionProfileId? : string;
}


export class KalturaDistributeObjectTask extends KalturaObjectTask {

    distributionProfileId : string;

    constructor(data? : KalturaDistributeObjectTaskArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributeObjectTask' },
				distributionProfileId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDistributeObjectTask'] = KalturaDistributeObjectTask;