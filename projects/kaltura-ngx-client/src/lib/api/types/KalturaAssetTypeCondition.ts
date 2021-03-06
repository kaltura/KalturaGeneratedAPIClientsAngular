
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaAssetTypeConditionArgs  extends KalturaConditionArgs {
    assetTypes? : string;
}


export class KalturaAssetTypeCondition extends KalturaCondition {

    assetTypes : string;

    constructor(data? : KalturaAssetTypeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetTypeCondition' },
				assetTypes : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetTypeCondition'] = KalturaAssetTypeCondition;