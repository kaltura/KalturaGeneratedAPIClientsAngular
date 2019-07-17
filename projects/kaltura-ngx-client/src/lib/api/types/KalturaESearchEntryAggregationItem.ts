
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchEntryAggregateByFieldName } from './KalturaESearchEntryAggregateByFieldName';
import { KalturaESearchAggregationItem, KalturaESearchAggregationItemArgs } from './KalturaESearchAggregationItem';

export interface KalturaESearchEntryAggregationItemArgs  extends KalturaESearchAggregationItemArgs {
    fieldName? : KalturaESearchEntryAggregateByFieldName;
}


export class KalturaESearchEntryAggregationItem extends KalturaESearchAggregationItem {

    fieldName : KalturaESearchEntryAggregateByFieldName;

    constructor(data? : KalturaESearchEntryAggregationItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchEntryAggregationItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaESearchEntryAggregateByFieldName, subType : 'KalturaESearchEntryAggregateByFieldName' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchEntryAggregationItem'] = KalturaESearchEntryAggregationItem;