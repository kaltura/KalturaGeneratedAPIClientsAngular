
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermission } from './KalturaPermission';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPermissionListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaPermissionListResponse extends KalturaListResponse {

    readonly objects : KalturaPermission[];

    constructor(data? : KalturaPermissionListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaPermissionListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaPermission, subType : 'KalturaPermission' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermissionListResponse',KalturaPermissionListResponse);
