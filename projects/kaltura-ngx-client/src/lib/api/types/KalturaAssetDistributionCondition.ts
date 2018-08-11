
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetDistributionConditionArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaAssetDistributionCondition extends KalturaObjectBase {

    

    constructor(data? : KalturaAssetDistributionConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetDistributionCondition' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetDistributionCondition'] = KalturaAssetDistributionCondition;