
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaApiParameterPermissionItemAction } from './KalturaApiParameterPermissionItemAction';
import { KalturaPermissionItem, KalturaPermissionItemArgs } from './KalturaPermissionItem';

export interface KalturaApiParameterPermissionItemArgs  extends KalturaPermissionItemArgs {
    object? : string;
	parameter? : string;
	action? : KalturaApiParameterPermissionItemAction;
}


export class KalturaApiParameterPermissionItem extends KalturaPermissionItem {

    object : string;
	parameter : string;
	action : KalturaApiParameterPermissionItemAction;

    constructor(data? : KalturaApiParameterPermissionItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaApiParameterPermissionItem' },
				object : { type : 's' },
				parameter : { type : 's' },
				action : { type : 'es', subTypeConstructor : KalturaApiParameterPermissionItemAction, subType : 'KalturaApiParameterPermissionItemAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaApiParameterPermissionItem'] = KalturaApiParameterPermissionItem;