
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCuePointAggregateByFieldName } from './KalturaESearchCuePointAggregateByFieldName';
import { KalturaESearchAggregationItem, KalturaESearchAggregationItemArgs } from './KalturaESearchAggregationItem';

export interface KalturaESearchCuepointsAggregationItemArgs  extends KalturaESearchAggregationItemArgs {
    fieldName? : KalturaESearchCuePointAggregateByFieldName;
}


export class KalturaESearchCuepointsAggregationItem extends KalturaESearchAggregationItem {

    fieldName : KalturaESearchCuePointAggregateByFieldName;

    constructor(data? : KalturaESearchCuepointsAggregationItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCuepointsAggregationItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaESearchCuePointAggregateByFieldName, subType : 'KalturaESearchCuePointAggregateByFieldName' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchCuepointsAggregationItem'] = KalturaESearchCuepointsAggregationItem;