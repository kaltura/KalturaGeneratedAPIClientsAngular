
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchEntryResult } from './KalturaESearchEntryResult';
import { KalturaESearchAggregationResponseItem } from './KalturaESearchAggregationResponseItem';
import { KalturaESearchResponse, KalturaESearchResponseArgs } from './KalturaESearchResponse';

export interface KalturaESearchEntryResponseArgs  extends KalturaESearchResponseArgs {
    
}


export class KalturaESearchEntryResponse extends KalturaESearchResponse {

    readonly objects : KalturaESearchEntryResult[];
	readonly aggregations : KalturaESearchAggregationResponseItem[];

    constructor(data? : KalturaESearchEntryResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
		if (typeof this.aggregations === 'undefined') this.aggregations = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchEntryResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaESearchEntryResult, subType : 'KalturaESearchEntryResult' },
				aggregations : { type : 'a', readOnly : true, subTypeConstructor : KalturaESearchAggregationResponseItem, subType : 'KalturaESearchAggregationResponseItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchEntryResponse'] = KalturaESearchEntryResponse;