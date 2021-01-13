
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaReachProfileStatus } from './KalturaReachProfileStatus';
import { KalturaReachProfileType } from './KalturaReachProfileType';
import { KalturaVendorCatalogItemOutputFormat } from './KalturaVendorCatalogItemOutputFormat';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaReachProfileContentDeletionPolicy } from './KalturaReachProfileContentDeletionPolicy';
import { KalturaRule } from './KalturaRule';
import { KalturaBaseVendorCredit } from './KalturaBaseVendorCredit';
import { KalturaDictionary } from './KalturaDictionary';
import { KalturaVendorTaskProcessingRegion } from './KalturaVendorTaskProcessingRegion';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReachProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	profileType? : KalturaReachProfileType;
	defaultOutputFormat? : KalturaVendorCatalogItemOutputFormat;
	enableMachineModeration? : KalturaNullableBoolean;
	enableHumanModeration? : KalturaNullableBoolean;
	autoDisplayMachineCaptionsOnPlayer? : KalturaNullableBoolean;
	autoDisplayHumanCaptionsOnPlayer? : KalturaNullableBoolean;
	enableMetadataExtraction? : KalturaNullableBoolean;
	enableSpeakerChangeIndication? : KalturaNullableBoolean;
	enableAudioTags? : KalturaNullableBoolean;
	enableProfanityRemoval? : KalturaNullableBoolean;
	maxCharactersPerCaptionLine? : number;
	labelAdditionForMachineServiceType? : string;
	labelAdditionForHumanServiceType? : string;
	contentDeletionPolicy? : KalturaReachProfileContentDeletionPolicy;
	rules? : KalturaRule[];
	credit? : KalturaBaseVendorCredit;
	dictionaries? : KalturaDictionary[];
	flavorParamsIds? : string;
	vendorTaskProcessingRegion? : KalturaVendorTaskProcessingRegion;
}


export class KalturaReachProfile extends KalturaObjectBase {

    readonly id : number;
	name : string;
	readonly partnerId : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly status : KalturaReachProfileStatus;
	profileType : KalturaReachProfileType;
	defaultOutputFormat : KalturaVendorCatalogItemOutputFormat;
	enableMachineModeration : KalturaNullableBoolean;
	enableHumanModeration : KalturaNullableBoolean;
	autoDisplayMachineCaptionsOnPlayer : KalturaNullableBoolean;
	autoDisplayHumanCaptionsOnPlayer : KalturaNullableBoolean;
	enableMetadataExtraction : KalturaNullableBoolean;
	enableSpeakerChangeIndication : KalturaNullableBoolean;
	enableAudioTags : KalturaNullableBoolean;
	enableProfanityRemoval : KalturaNullableBoolean;
	maxCharactersPerCaptionLine : number;
	labelAdditionForMachineServiceType : string;
	labelAdditionForHumanServiceType : string;
	contentDeletionPolicy : KalturaReachProfileContentDeletionPolicy;
	rules : KalturaRule[];
	credit : KalturaBaseVendorCredit;
	readonly usedCredit : number;
	dictionaries : KalturaDictionary[];
	flavorParamsIds : string;
	vendorTaskProcessingRegion : KalturaVendorTaskProcessingRegion;

    constructor(data? : KalturaReachProfileArgs)
    {
        super(data);
        if (typeof this.rules === 'undefined') this.rules = [];
		if (typeof this.dictionaries === 'undefined') this.dictionaries = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReachProfile' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				partnerId : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaReachProfileStatus, subType : 'KalturaReachProfileStatus' },
				profileType : { type : 'en', subTypeConstructor : KalturaReachProfileType, subType : 'KalturaReachProfileType' },
				defaultOutputFormat : { type : 'en', subTypeConstructor : KalturaVendorCatalogItemOutputFormat, subType : 'KalturaVendorCatalogItemOutputFormat' },
				enableMachineModeration : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				enableHumanModeration : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				autoDisplayMachineCaptionsOnPlayer : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				autoDisplayHumanCaptionsOnPlayer : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				enableMetadataExtraction : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				enableSpeakerChangeIndication : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				enableAudioTags : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				enableProfanityRemoval : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				maxCharactersPerCaptionLine : { type : 'n' },
				labelAdditionForMachineServiceType : { type : 's' },
				labelAdditionForHumanServiceType : { type : 's' },
				contentDeletionPolicy : { type : 'en', subTypeConstructor : KalturaReachProfileContentDeletionPolicy, subType : 'KalturaReachProfileContentDeletionPolicy' },
				rules : { type : 'a', subTypeConstructor : KalturaRule, subType : 'KalturaRule' },
				credit : { type : 'o', subTypeConstructor : KalturaBaseVendorCredit, subType : 'KalturaBaseVendorCredit' },
				usedCredit : { type : 'n', readOnly : true },
				dictionaries : { type : 'a', subTypeConstructor : KalturaDictionary, subType : 'KalturaDictionary' },
				flavorParamsIds : { type : 's' },
				vendorTaskProcessingRegion : { type : 'en', subTypeConstructor : KalturaVendorTaskProcessingRegion, subType : 'KalturaVendorTaskProcessingRegion' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaReachProfile'] = KalturaReachProfile;