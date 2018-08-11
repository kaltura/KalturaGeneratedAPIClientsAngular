
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionValidationError, KalturaDistributionValidationErrorArgs } from './KalturaDistributionValidationError';

export interface KalturaDistributionValidationErrorMissingFlavorArgs  extends KalturaDistributionValidationErrorArgs {
    flavorParamsId? : string;
}


export class KalturaDistributionValidationErrorMissingFlavor extends KalturaDistributionValidationError {

    flavorParamsId : string;

    constructor(data? : KalturaDistributionValidationErrorMissingFlavorArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionValidationErrorMissingFlavor' },
				flavorParamsId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDistributionValidationErrorMissingFlavor'] = KalturaDistributionValidationErrorMissingFlavor;