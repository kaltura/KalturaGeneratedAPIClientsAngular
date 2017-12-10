
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionValidationError, KalturaDistributionValidationErrorArgs } from './KalturaDistributionValidationError';

export interface KalturaDistributionValidationErrorConditionNotMetArgs  extends KalturaDistributionValidationErrorArgs {
    conditionName? : string;
}


export class KalturaDistributionValidationErrorConditionNotMet extends KalturaDistributionValidationError {

    conditionName : string;

    constructor(data? : KalturaDistributionValidationErrorConditionNotMetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionValidationErrorConditionNotMet' },
				conditionName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionValidationErrorConditionNotMet',KalturaDistributionValidationErrorConditionNotMet);
