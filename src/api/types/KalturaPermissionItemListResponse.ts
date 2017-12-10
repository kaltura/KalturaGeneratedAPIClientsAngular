
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermissionItem } from './KalturaPermissionItem';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPermissionItemListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaPermissionItemListResponse extends KalturaListResponse {

    readonly objects : KalturaPermissionItem[];

    constructor(data? : KalturaPermissionItemListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionItemListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaPermissionItem, subType : 'KalturaPermissionItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermissionItemListResponse',KalturaPermissionItemListResponse);
