
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVirtualEvent } from './KalturaVirtualEvent';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaVirtualEventListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaVirtualEvent[];
}


export class KalturaVirtualEventListResponse extends KalturaListResponse {

    objects : KalturaVirtualEvent[];

    constructor(data? : KalturaVirtualEventListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaVirtualEventListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaVirtualEvent, subType : 'KalturaVirtualEvent' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVirtualEventListResponse'] = KalturaVirtualEventListResponse;