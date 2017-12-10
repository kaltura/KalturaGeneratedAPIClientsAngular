
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAccessControl } from './KalturaAccessControl';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAccessControlListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaAccessControlListResponse extends KalturaListResponse {

    readonly objects : KalturaAccessControl[];

    constructor(data? : KalturaAccessControlListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaAccessControlListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaAccessControl, subType : 'KalturaAccessControl' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAccessControlListResponse',KalturaAccessControlListResponse);
