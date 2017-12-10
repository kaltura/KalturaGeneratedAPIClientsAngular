
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetDistributionCondition } from './KalturaAssetDistributionCondition';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetDistributionRuleArgs  extends KalturaObjectBaseArgs {
    validationError? : string;
	assetDistributionConditions? : KalturaAssetDistributionCondition[];
}


export class KalturaAssetDistributionRule extends KalturaObjectBase {

    validationError : string;
	assetDistributionConditions : KalturaAssetDistributionCondition[];

    constructor(data? : KalturaAssetDistributionRuleArgs)
    {
        super(data);
        if (typeof this.assetDistributionConditions === 'undefined') this.assetDistributionConditions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetDistributionRule' },
				validationError : { type : 's' },
				assetDistributionConditions : { type : 'a', subTypeConstructor : KalturaAssetDistributionCondition, subType : 'KalturaAssetDistributionCondition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetDistributionRule',KalturaAssetDistributionRule);
