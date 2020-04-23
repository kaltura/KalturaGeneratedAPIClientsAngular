
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRatingCount } from './KalturaRatingCount';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaRatingCountListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaRatingCountListResponse extends KalturaListResponse {

    readonly objects : KalturaRatingCount[];

    constructor(data? : KalturaRatingCountListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaRatingCountListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaRatingCount, subType : 'KalturaRatingCount' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRatingCountListResponse'] = KalturaRatingCountListResponse;