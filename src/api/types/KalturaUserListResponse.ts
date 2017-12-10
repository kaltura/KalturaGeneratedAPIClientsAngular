
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUser } from './KalturaUser';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUserListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaUserListResponse extends KalturaListResponse {

    readonly objects : KalturaUser[];

    constructor(data? : KalturaUserListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaUserListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaUser, subType : 'KalturaUser' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserListResponse',KalturaUserListResponse);
