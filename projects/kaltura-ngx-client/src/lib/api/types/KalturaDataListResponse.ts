
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDataEntry } from './KalturaDataEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaDataListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaDataListResponse extends KalturaListResponse {

    readonly objects : KalturaDataEntry[];

    constructor(data? : KalturaDataListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaDataListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaDataEntry, subType : 'KalturaDataEntry' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDataListResponse'] = KalturaDataListResponse;