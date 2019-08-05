
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaCrossKalturaDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    targetServiceUrl? : string;
	targetAccountId? : number;
	targetLoginId? : string;
	targetLoginPassword? : string;
	metadataXslt? : string;
	metadataXpathsTriggerUpdate? : KalturaStringValue[];
	distributeCaptions? : boolean;
	designatedCategories? : string;
	distributeCategories? : boolean;
	collaboratorsCustomMetadataProfileId? : string;
	collaboratorsFromCustomMetadataProfile? : boolean;
	distributeCuePoints? : boolean;
	distributeRemoteFlavorAssetContent? : boolean;
	distributeRemoteThumbAssetContent? : boolean;
	distributeRemoteCaptionAssetContent? : boolean;
	mapAccessControlProfileIds? : KalturaKeyValue[];
	mapConversionProfileIds? : KalturaKeyValue[];
	mapMetadataProfileIds? : KalturaKeyValue[];
	mapStorageProfileIds? : KalturaKeyValue[];
	mapFlavorParamsIds? : KalturaKeyValue[];
	mapThumbParamsIds? : KalturaKeyValue[];
	mapCaptionParamsIds? : KalturaKeyValue[];
	mapAttachmentParamsIds? : KalturaKeyValue[];
}


export class KalturaCrossKalturaDistributionProfile extends KalturaConfigurableDistributionProfile {

    targetServiceUrl : string;
	targetAccountId : number;
	targetLoginId : string;
	targetLoginPassword : string;
	metadataXslt : string;
	metadataXpathsTriggerUpdate : KalturaStringValue[];
	distributeCaptions : boolean;
	designatedCategories : string;
	distributeCategories : boolean;
	collaboratorsCustomMetadataProfileId : string;
	collaboratorsFromCustomMetadataProfile : boolean;
	distributeCuePoints : boolean;
	distributeRemoteFlavorAssetContent : boolean;
	distributeRemoteThumbAssetContent : boolean;
	distributeRemoteCaptionAssetContent : boolean;
	mapAccessControlProfileIds : KalturaKeyValue[];
	mapConversionProfileIds : KalturaKeyValue[];
	mapMetadataProfileIds : KalturaKeyValue[];
	mapStorageProfileIds : KalturaKeyValue[];
	mapFlavorParamsIds : KalturaKeyValue[];
	mapThumbParamsIds : KalturaKeyValue[];
	mapCaptionParamsIds : KalturaKeyValue[];
	mapAttachmentParamsIds : KalturaKeyValue[];

    constructor(data? : KalturaCrossKalturaDistributionProfileArgs)
    {
        super(data);
        if (typeof this.metadataXpathsTriggerUpdate === 'undefined') this.metadataXpathsTriggerUpdate = [];
		if (typeof this.mapAccessControlProfileIds === 'undefined') this.mapAccessControlProfileIds = [];
		if (typeof this.mapConversionProfileIds === 'undefined') this.mapConversionProfileIds = [];
		if (typeof this.mapMetadataProfileIds === 'undefined') this.mapMetadataProfileIds = [];
		if (typeof this.mapStorageProfileIds === 'undefined') this.mapStorageProfileIds = [];
		if (typeof this.mapFlavorParamsIds === 'undefined') this.mapFlavorParamsIds = [];
		if (typeof this.mapThumbParamsIds === 'undefined') this.mapThumbParamsIds = [];
		if (typeof this.mapCaptionParamsIds === 'undefined') this.mapCaptionParamsIds = [];
		if (typeof this.mapAttachmentParamsIds === 'undefined') this.mapAttachmentParamsIds = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCrossKalturaDistributionProfile' },
				targetServiceUrl : { type : 's' },
				targetAccountId : { type : 'n' },
				targetLoginId : { type : 's' },
				targetLoginPassword : { type : 's' },
				metadataXslt : { type : 's' },
				metadataXpathsTriggerUpdate : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				distributeCaptions : { type : 'b' },
				designatedCategories : { type : 's' },
				distributeCategories : { type : 'b' },
				collaboratorsCustomMetadataProfileId : { type : 's' },
				collaboratorsFromCustomMetadataProfile : { type : 'b' },
				distributeCuePoints : { type : 'b' },
				distributeRemoteFlavorAssetContent : { type : 'b' },
				distributeRemoteThumbAssetContent : { type : 'b' },
				distributeRemoteCaptionAssetContent : { type : 'b' },
				mapAccessControlProfileIds : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				mapConversionProfileIds : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				mapMetadataProfileIds : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				mapStorageProfileIds : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				mapFlavorParamsIds : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				mapThumbParamsIds : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				mapCaptionParamsIds : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				mapAttachmentParamsIds : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCrossKalturaDistributionProfile'] = KalturaCrossKalturaDistributionProfile;