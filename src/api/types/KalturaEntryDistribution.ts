
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryDistributionStatus } from './KalturaEntryDistributionStatus';
import { KalturaEntryDistributionSunStatus } from './KalturaEntryDistributionSunStatus';
import { KalturaEntryDistributionFlag } from './KalturaEntryDistributionFlag';
import { KalturaDistributionValidationError } from './KalturaDistributionValidationError';
import { KalturaBatchJobErrorTypes } from './KalturaBatchJobErrorTypes';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEntryDistributionArgs  extends KalturaObjectBaseArgs {
    entryId? : string;
	distributionProfileId? : number;
	thumbAssetIds? : string;
	flavorAssetIds? : string;
	assetIds? : string;
	sunrise? : Date;
	sunset? : Date;
	validationErrors? : KalturaDistributionValidationError[];
}


export class KalturaEntryDistribution extends KalturaObjectBase {

    readonly id : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly submittedAt : Date;
	entryId : string;
	readonly partnerId : number;
	distributionProfileId : number;
	readonly status : KalturaEntryDistributionStatus;
	readonly sunStatus : KalturaEntryDistributionSunStatus;
	readonly dirtyStatus : KalturaEntryDistributionFlag;
	thumbAssetIds : string;
	flavorAssetIds : string;
	assetIds : string;
	sunrise : Date;
	sunset : Date;
	readonly remoteId : string;
	readonly plays : number;
	readonly views : number;
	validationErrors : KalturaDistributionValidationError[];
	readonly errorType : KalturaBatchJobErrorTypes;
	readonly errorNumber : number;
	readonly errorDescription : string;
	readonly hasSubmitResultsLog : KalturaNullableBoolean;
	readonly hasSubmitSentDataLog : KalturaNullableBoolean;
	readonly hasUpdateResultsLog : KalturaNullableBoolean;
	readonly hasUpdateSentDataLog : KalturaNullableBoolean;
	readonly hasDeleteResultsLog : KalturaNullableBoolean;
	readonly hasDeleteSentDataLog : KalturaNullableBoolean;

    constructor(data? : KalturaEntryDistributionArgs)
    {
        super(data);
        if (typeof this.validationErrors === 'undefined') this.validationErrors = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryDistribution' },
				id : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				submittedAt : { type : 'd', readOnly : true },
				entryId : { type : 's' },
				partnerId : { type : 'n', readOnly : true },
				distributionProfileId : { type : 'n' },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaEntryDistributionStatus, subType : 'KalturaEntryDistributionStatus' },
				sunStatus : { type : 'en', readOnly : true, subTypeConstructor : KalturaEntryDistributionSunStatus, subType : 'KalturaEntryDistributionSunStatus' },
				dirtyStatus : { type : 'en', readOnly : true, subTypeConstructor : KalturaEntryDistributionFlag, subType : 'KalturaEntryDistributionFlag' },
				thumbAssetIds : { type : 's' },
				flavorAssetIds : { type : 's' },
				assetIds : { type : 's' },
				sunrise : { type : 'd' },
				sunset : { type : 'd' },
				remoteId : { type : 's', readOnly : true },
				plays : { type : 'n', readOnly : true },
				views : { type : 'n', readOnly : true },
				validationErrors : { type : 'a', subTypeConstructor : KalturaDistributionValidationError, subType : 'KalturaDistributionValidationError' },
				errorType : { type : 'en', readOnly : true, subTypeConstructor : KalturaBatchJobErrorTypes, subType : 'KalturaBatchJobErrorTypes' },
				errorNumber : { type : 'n', readOnly : true },
				errorDescription : { type : 's', readOnly : true },
				hasSubmitResultsLog : { type : 'en', readOnly : true, subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				hasSubmitSentDataLog : { type : 'en', readOnly : true, subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				hasUpdateResultsLog : { type : 'en', readOnly : true, subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				hasUpdateSentDataLog : { type : 'en', readOnly : true, subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				hasDeleteResultsLog : { type : 'en', readOnly : true, subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				hasDeleteSentDataLog : { type : 'en', readOnly : true, subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryDistribution',KalturaEntryDistribution);
