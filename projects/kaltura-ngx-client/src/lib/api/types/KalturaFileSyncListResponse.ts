
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFileSync } from './KalturaFileSync';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaFileSyncListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaFileSyncListResponse extends KalturaListResponse {

    readonly objects : KalturaFileSync[];

    constructor(data? : KalturaFileSyncListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaFileSyncListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaFileSync, subType : 'KalturaFileSync' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFileSyncListResponse'] = KalturaFileSyncListResponse;