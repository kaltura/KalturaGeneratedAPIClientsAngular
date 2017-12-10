
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionValidationError, KalturaDistributionValidationErrorArgs } from './KalturaDistributionValidationError';

export interface KalturaDistributionValidationErrorMissingMetadataArgs  extends KalturaDistributionValidationErrorArgs {
    fieldName? : string;
}


export class KalturaDistributionValidationErrorMissingMetadata extends KalturaDistributionValidationError {

    fieldName : string;

    constructor(data? : KalturaDistributionValidationErrorMissingMetadataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionValidationErrorMissingMetadata' },
				fieldName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionValidationErrorMissingMetadata',KalturaDistributionValidationErrorMissingMetadata);
