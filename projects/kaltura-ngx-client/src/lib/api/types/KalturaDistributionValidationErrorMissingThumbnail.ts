
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionThumbDimensions } from './KalturaDistributionThumbDimensions';
import { KalturaDistributionValidationError, KalturaDistributionValidationErrorArgs } from './KalturaDistributionValidationError';

export interface KalturaDistributionValidationErrorMissingThumbnailArgs  extends KalturaDistributionValidationErrorArgs {
    dimensions? : KalturaDistributionThumbDimensions;
}


export class KalturaDistributionValidationErrorMissingThumbnail extends KalturaDistributionValidationError {

    dimensions : KalturaDistributionThumbDimensions;

    constructor(data? : KalturaDistributionValidationErrorMissingThumbnailArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionValidationErrorMissingThumbnail' },
				dimensions : { type : 'o', subTypeConstructor : KalturaDistributionThumbDimensions, subType : 'KalturaDistributionThumbDimensions' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDistributionValidationErrorMissingThumbnail'] = KalturaDistributionValidationErrorMissingThumbnail;