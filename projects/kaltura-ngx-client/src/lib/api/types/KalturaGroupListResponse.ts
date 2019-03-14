
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaGroup } from './KalturaGroup';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaGroupListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaGroupListResponse extends KalturaListResponse {

    readonly objects : KalturaGroup[];

    constructor(data? : KalturaGroupListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaGroupListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaGroup, subType : 'KalturaGroup' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGroupListResponse'] = KalturaGroupListResponse;