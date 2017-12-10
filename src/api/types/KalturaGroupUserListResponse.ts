
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGroupUser } from './KalturaGroupUser';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaGroupUserListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaGroupUserListResponse extends KalturaListResponse {

    readonly objects : KalturaGroupUser[];

    constructor(data? : KalturaGroupUserListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaGroupUserListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaGroupUser, subType : 'KalturaGroupUser' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGroupUserListResponse',KalturaGroupUserListResponse);
