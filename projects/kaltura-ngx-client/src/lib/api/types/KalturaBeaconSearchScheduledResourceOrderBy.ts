
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBeaconSearchScheduledResourceOrderByItem } from './KalturaBeaconSearchScheduledResourceOrderByItem';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBeaconSearchScheduledResourceOrderByArgs  extends KalturaObjectBaseArgs {
    orderItems? : KalturaBeaconSearchScheduledResourceOrderByItem[];
}


export class KalturaBeaconSearchScheduledResourceOrderBy extends KalturaObjectBase {

    orderItems : KalturaBeaconSearchScheduledResourceOrderByItem[];

    constructor(data? : KalturaBeaconSearchScheduledResourceOrderByArgs)
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
                objectType : { type : 'c', default : 'KalturaBeaconSearchScheduledResourceOrderBy' },
				orderItems : { type : 'a', subTypeConstructor : KalturaBeaconSearchScheduledResourceOrderByItem, subType : 'KalturaBeaconSearchScheduledResourceOrderByItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBeaconSearchScheduledResourceOrderBy'] = KalturaBeaconSearchScheduledResourceOrderBy;