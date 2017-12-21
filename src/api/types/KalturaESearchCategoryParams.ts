
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchCategoryOperator } from './KalturaESearchCategoryOperator';
import { KalturaESearchParams, KalturaESearchParamsArgs } from './KalturaESearchParams';

export interface KalturaESearchCategoryParamsArgs  extends KalturaESearchParamsArgs {
    searchOperator? : KalturaESearchCategoryOperator;
}


export class KalturaESearchCategoryParams extends KalturaESearchParams {

    searchOperator : KalturaESearchCategoryOperator;

    constructor(data? : KalturaESearchCategoryParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCategoryParams' },
				searchOperator : { type : 'o', subTypeConstructor : KalturaESearchCategoryOperator, subType : 'KalturaESearchCategoryOperator' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchCategoryParams',KalturaESearchCategoryParams);
