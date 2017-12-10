
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionValidationErrorInvalidData, KalturaDistributionValidationErrorInvalidDataArgs } from './KalturaDistributionValidationErrorInvalidData';

export interface KalturaDistributionValidationErrorInvalidMetadataArgs  extends KalturaDistributionValidationErrorInvalidDataArgs {
    metadataProfileId? : number;
}


export class KalturaDistributionValidationErrorInvalidMetadata extends KalturaDistributionValidationErrorInvalidData {

    metadataProfileId : number;

    constructor(data? : KalturaDistributionValidationErrorInvalidMetadataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionValidationErrorInvalidMetadata' },
				metadataProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionValidationErrorInvalidMetadata',KalturaDistributionValidationErrorInvalidMetadata);
