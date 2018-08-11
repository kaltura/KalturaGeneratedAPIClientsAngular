
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPermissionItem, KalturaPermissionItemArgs } from './KalturaPermissionItem';

export interface KalturaApiActionPermissionItemArgs  extends KalturaPermissionItemArgs {
    service? : string;
	action? : string;
}


export class KalturaApiActionPermissionItem extends KalturaPermissionItem {

    service : string;
	action : string;

    constructor(data? : KalturaApiActionPermissionItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaApiActionPermissionItem' },
				service : { type : 's' },
				action : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaApiActionPermissionItem'] = KalturaApiActionPermissionItem;