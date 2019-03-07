
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaReachProfile } from './KalturaReachProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaReachProfileListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaReachProfileListResponse extends KalturaListResponse {

    readonly objects : KalturaReachProfile[];

    constructor(data? : KalturaReachProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaReachProfileListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaReachProfile, subType : 'KalturaReachProfile' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaReachProfileListResponse'] = KalturaReachProfileListResponse;