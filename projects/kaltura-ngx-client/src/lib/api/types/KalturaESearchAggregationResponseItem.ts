
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchAggregationBucket } from './KalturaESearchAggregationBucket';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchAggregationResponseItemArgs  extends KalturaObjectBaseArgs {
    name? : string;
	fieldName? : string;
	buckets? : KalturaESearchAggregationBucket[];
}


export class KalturaESearchAggregationResponseItem extends KalturaObjectBase {

    name : string;
	fieldName : string;
	buckets : KalturaESearchAggregationBucket[];

    constructor(data? : KalturaESearchAggregationResponseItemArgs)
    {
        super(data);
        if (typeof this.buckets === 'undefined') this.buckets = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchAggregationResponseItem' },
				name : { type : 's' },
				fieldName : { type : 's' },
				buckets : { type : 'a', subTypeConstructor : KalturaESearchAggregationBucket, subType : 'KalturaESearchAggregationBucket' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchAggregationResponseItem'] = KalturaESearchAggregationResponseItem;