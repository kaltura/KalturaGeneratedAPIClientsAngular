
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionValidationErrorType } from './KalturaDistributionValidationErrorType';
import { KalturaDistributionValidationError, KalturaDistributionValidationErrorArgs } from './KalturaDistributionValidationError';

export interface KalturaDistributionValidationErrorInvalidDataArgs  extends KalturaDistributionValidationErrorArgs {
    fieldName? : string;
	validationErrorType? : KalturaDistributionValidationErrorType;
	validationErrorParam? : string;
}


export class KalturaDistributionValidationErrorInvalidData extends KalturaDistributionValidationError {

    fieldName : string;
	validationErrorType : KalturaDistributionValidationErrorType;
	validationErrorParam : string;

    constructor(data? : KalturaDistributionValidationErrorInvalidDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionValidationErrorInvalidData' },
				fieldName : { type : 's' },
				validationErrorType : { type : 'en', subTypeConstructor : KalturaDistributionValidationErrorType, subType : 'KalturaDistributionValidationErrorType' },
				validationErrorParam : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionValidationErrorInvalidData',KalturaDistributionValidationErrorInvalidData);
