
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionValidationError, KalturaDistributionValidationErrorArgs } from './KalturaDistributionValidationError';

export interface KalturaDistributionValidationErrorMissingAssetArgs  extends KalturaDistributionValidationErrorArgs {
    data? : string;
}


export class KalturaDistributionValidationErrorMissingAsset extends KalturaDistributionValidationError {

    data : string;

    constructor(data? : KalturaDistributionValidationErrorMissingAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionValidationErrorMissingAsset' },
				data : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDistributionValidationErrorMissingAsset'] = KalturaDistributionValidationErrorMissingAsset;