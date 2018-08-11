
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaDistributionErrorType } from './KalturaDistributionErrorType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDistributionValidationErrorArgs  extends KalturaObjectBaseArgs {
    action? : KalturaDistributionAction;
	errorType? : KalturaDistributionErrorType;
	description? : string;
}


export class KalturaDistributionValidationError extends KalturaObjectBase {

    action : KalturaDistributionAction;
	errorType : KalturaDistributionErrorType;
	description : string;

    constructor(data? : KalturaDistributionValidationErrorArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionValidationError' },
				action : { type : 'en', subTypeConstructor : KalturaDistributionAction, subType : 'KalturaDistributionAction' },
				errorType : { type : 'en', subTypeConstructor : KalturaDistributionErrorType, subType : 'KalturaDistributionErrorType' },
				description : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDistributionValidationError'] = KalturaDistributionValidationError;