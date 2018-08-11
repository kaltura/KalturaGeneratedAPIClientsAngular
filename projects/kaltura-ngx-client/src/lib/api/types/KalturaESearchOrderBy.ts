
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchOrderByItem } from './KalturaESearchOrderByItem';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchOrderByArgs  extends KalturaObjectBaseArgs {
    orderItems? : KalturaESearchOrderByItem[];
}


export class KalturaESearchOrderBy extends KalturaObjectBase {

    orderItems : KalturaESearchOrderByItem[];

    constructor(data? : KalturaESearchOrderByArgs)
    {
        super(data);
        if (typeof this.orderItems === 'undefined') this.orderItems = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchOrderBy' },
				orderItems : { type : 'a', subTypeConstructor : KalturaESearchOrderByItem, subType : 'KalturaESearchOrderByItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchOrderBy'] = KalturaESearchOrderBy;