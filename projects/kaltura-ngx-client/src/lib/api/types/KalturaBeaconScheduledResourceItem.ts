
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBeaconScheduledResourceFieldName } from './KalturaBeaconScheduledResourceFieldName';
import { KalturaBeaconAbstractScheduledResourceItem, KalturaBeaconAbstractScheduledResourceItemArgs } from './KalturaBeaconAbstractScheduledResourceItem';

export interface KalturaBeaconScheduledResourceItemArgs  extends KalturaBeaconAbstractScheduledResourceItemArgs {
    fieldName? : KalturaBeaconScheduledResourceFieldName;
}


export class KalturaBeaconScheduledResourceItem extends KalturaBeaconAbstractScheduledResourceItem {

    fieldName : KalturaBeaconScheduledResourceFieldName;

    constructor(data? : KalturaBeaconScheduledResourceItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBeaconScheduledResourceItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaBeaconScheduledResourceFieldName, subType : 'KalturaBeaconScheduledResourceFieldName' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBeaconScheduledResourceItem'] = KalturaBeaconScheduledResourceItem;