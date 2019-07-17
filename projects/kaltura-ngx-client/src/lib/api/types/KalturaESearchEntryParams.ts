
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchEntryOperator } from './KalturaESearchEntryOperator';
import { KalturaESearchAggregation } from './KalturaESearchAggregation';
import { KalturaESearchParams, KalturaESearchParamsArgs } from './KalturaESearchParams';

export interface KalturaESearchEntryParamsArgs  extends KalturaESearchParamsArgs {
    searchOperator? : KalturaESearchEntryOperator;
	aggregations? : KalturaESearchAggregation;
}


export class KalturaESearchEntryParams extends KalturaESearchParams {

    searchOperator : KalturaESearchEntryOperator;
	aggregations : KalturaESearchAggregation;

    constructor(data? : KalturaESearchEntryParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchEntryParams' },
				searchOperator : { type : 'o', subTypeConstructor : KalturaESearchEntryOperator, subType : 'KalturaESearchEntryOperator' },
				aggregations : { type : 'o', subTypeConstructor : KalturaESearchAggregation, subType : 'KalturaESearchAggregation' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchEntryParams'] = KalturaESearchEntryParams;