
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryUser } from './KalturaCategoryUser';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCategoryUserListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaCategoryUserListResponse extends KalturaListResponse {

    readonly objects : KalturaCategoryUser[];

    constructor(data? : KalturaCategoryUserListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaCategoryUserListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaCategoryUser, subType : 'KalturaCategoryUser' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryUserListResponse',KalturaCategoryUserListResponse);
