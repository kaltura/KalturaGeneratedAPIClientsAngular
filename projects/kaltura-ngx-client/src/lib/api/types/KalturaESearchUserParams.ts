
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchUserOperator } from './KalturaESearchUserOperator';
import { KalturaESearchParams, KalturaESearchParamsArgs } from './KalturaESearchParams';

export interface KalturaESearchUserParamsArgs  extends KalturaESearchParamsArgs {
    searchOperator? : KalturaESearchUserOperator;
}


export class KalturaESearchUserParams extends KalturaESearchParams {

    searchOperator : KalturaESearchUserOperator;

    constructor(data? : KalturaESearchUserParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchUserParams' },
				searchOperator : { type : 'o', subTypeConstructor : KalturaESearchUserOperator, subType : 'KalturaESearchUserOperator' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchUserParams'] = KalturaESearchUserParams;