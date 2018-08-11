
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchUserOrderByFieldName } from './KalturaESearchUserOrderByFieldName';
import { KalturaESearchOrderByItem, KalturaESearchOrderByItemArgs } from './KalturaESearchOrderByItem';

export interface KalturaESearchUserOrderByItemArgs  extends KalturaESearchOrderByItemArgs {
    sortField? : KalturaESearchUserOrderByFieldName;
}


export class KalturaESearchUserOrderByItem extends KalturaESearchOrderByItem {

    sortField : KalturaESearchUserOrderByFieldName;

    constructor(data? : KalturaESearchUserOrderByItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchUserOrderByItem' },
				sortField : { type : 'es', subTypeConstructor : KalturaESearchUserOrderByFieldName, subType : 'KalturaESearchUserOrderByFieldName' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchUserOrderByItem'] = KalturaESearchUserOrderByItem;