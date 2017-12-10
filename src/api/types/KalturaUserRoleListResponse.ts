
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserRole } from './KalturaUserRole';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUserRoleListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaUserRoleListResponse extends KalturaListResponse {

    readonly objects : KalturaUserRole[];

    constructor(data? : KalturaUserRoleListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaUserRoleListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaUserRole, subType : 'KalturaUserRole' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserRoleListResponse',KalturaUserRoleListResponse);
