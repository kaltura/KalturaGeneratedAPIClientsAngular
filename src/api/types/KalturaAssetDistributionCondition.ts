
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaAssetDistributionCondition',KalturaAssetDistributionCondition);
