
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProviderType } from './KalturaDistributionProviderType';
import { KalturaDistributionProfileStatus } from './KalturaDistributionProfileStatus';
import { KalturaDistributionProfileActionStatus } from './KalturaDistributionProfileActionStatus';
import { KalturaDistributionThumbDimensions } from './KalturaDistributionThumbDimensions';
import { KalturaAssetDistributionRule } from './KalturaAssetDistributionRule';
import { KalturaDistributeTrigger } from './KalturaDistributeTrigger';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDistributionProfileArgs  extends KalturaObjectBaseArgs {
    providerType? : KalturaDistributionProviderType;
	name? : string;
	status? : KalturaDistributionProfileStatus;
	submitEnabled? : KalturaDistributionProfileActionStatus;
	updateEnabled? : KalturaDistributionProfileActionStatus;
	deleteEnabled? : KalturaDistributionProfileActionStatus;
	reportEnabled? : KalturaDistributionProfileActionStatus;
	autoCreateFlavors? : string;
	autoCreateThumb? : string;
	optionalFlavorParamsIds? : string;
	requiredFlavorParamsIds? : string;
	optionalThumbDimensions? : KalturaDistributionThumbDimensions[];
	requiredThumbDimensions? : KalturaDistributionThumbDimensions[];
	optionalAssetDistributionRules? : KalturaAssetDistributionRule[];
	requiredAssetDistributionRules? : KalturaAssetDistributionRule[];
	sunriseDefaultOffset? : number;
	sunsetDefaultOffset? : number;
	recommendedStorageProfileForDownload? : number;
	recommendedDcForDownload? : number;
	recommendedDcForExecute? : number;
	distributeTrigger? : KalturaDistributeTrigger;
}


export class KalturaDistributionProfile extends KalturaObjectBase {

    readonly id : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly partnerId : number;
	providerType : KalturaDistributionProviderType;
	name : string;
	status : KalturaDistributionProfileStatus;
	submitEnabled : KalturaDistributionProfileActionStatus;
	updateEnabled : KalturaDistributionProfileActionStatus;
	deleteEnabled : KalturaDistributionProfileActionStatus;
	reportEnabled : KalturaDistributionProfileActionStatus;
	autoCreateFlavors : string;
	autoCreateThumb : string;
	optionalFlavorParamsIds : string;
	requiredFlavorParamsIds : string;
	optionalThumbDimensions : KalturaDistributionThumbDimensions[];
	requiredThumbDimensions : KalturaDistributionThumbDimensions[];
	optionalAssetDistributionRules : KalturaAssetDistributionRule[];
	requiredAssetDistributionRules : KalturaAssetDistributionRule[];
	sunriseDefaultOffset : number;
	sunsetDefaultOffset : number;
	recommendedStorageProfileForDownload : number;
	recommendedDcForDownload : number;
	recommendedDcForExecute : number;
	distributeTrigger : KalturaDistributeTrigger;

    constructor(data? : KalturaDistributionProfileArgs)
    {
        super(data);
        if (typeof this.optionalThumbDimensions === 'undefined') this.optionalThumbDimensions = [];
		if (typeof this.requiredThumbDimensions === 'undefined') this.requiredThumbDimensions = [];
		if (typeof this.optionalAssetDistributionRules === 'undefined') this.optionalAssetDistributionRules = [];
		if (typeof this.requiredAssetDistributionRules === 'undefined') this.requiredAssetDistributionRules = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionProfile' },
				id : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				providerType : { type : 'es', subTypeConstructor : KalturaDistributionProviderType, subType : 'KalturaDistributionProviderType' },
				name : { type : 's' },
				status : { type : 'en', subTypeConstructor : KalturaDistributionProfileStatus, subType : 'KalturaDistributionProfileStatus' },
				submitEnabled : { type : 'en', subTypeConstructor : KalturaDistributionProfileActionStatus, subType : 'KalturaDistributionProfileActionStatus' },
				updateEnabled : { type : 'en', subTypeConstructor : KalturaDistributionProfileActionStatus, subType : 'KalturaDistributionProfileActionStatus' },
				deleteEnabled : { type : 'en', subTypeConstructor : KalturaDistributionProfileActionStatus, subType : 'KalturaDistributionProfileActionStatus' },
				reportEnabled : { type : 'en', subTypeConstructor : KalturaDistributionProfileActionStatus, subType : 'KalturaDistributionProfileActionStatus' },
				autoCreateFlavors : { type : 's' },
				autoCreateThumb : { type : 's' },
				optionalFlavorParamsIds : { type : 's' },
				requiredFlavorParamsIds : { type : 's' },
				optionalThumbDimensions : { type : 'a', subTypeConstructor : KalturaDistributionThumbDimensions, subType : 'KalturaDistributionThumbDimensions' },
				requiredThumbDimensions : { type : 'a', subTypeConstructor : KalturaDistributionThumbDimensions, subType : 'KalturaDistributionThumbDimensions' },
				optionalAssetDistributionRules : { type : 'a', subTypeConstructor : KalturaAssetDistributionRule, subType : 'KalturaAssetDistributionRule' },
				requiredAssetDistributionRules : { type : 'a', subTypeConstructor : KalturaAssetDistributionRule, subType : 'KalturaAssetDistributionRule' },
				sunriseDefaultOffset : { type : 'n' },
				sunsetDefaultOffset : { type : 'n' },
				recommendedStorageProfileForDownload : { type : 'n' },
				recommendedDcForDownload : { type : 'n' },
				recommendedDcForExecute : { type : 'n' },
				distributeTrigger : { type : 'en', subTypeConstructor : KalturaDistributeTrigger, subType : 'KalturaDistributeTrigger' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDistributionProfile'] = KalturaDistributionProfile;