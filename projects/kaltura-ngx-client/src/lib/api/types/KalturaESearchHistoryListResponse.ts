
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchHistory } from './KalturaESearchHistory';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaESearchHistoryListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaESearchHistoryListResponse extends KalturaListResponse {

    readonly objects : KalturaESearchHistory[];

    constructor(data? : KalturaESearchHistoryListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaESearchHistoryListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaESearchHistory, subType : 'KalturaESearchHistory' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchHistoryListResponse'] = KalturaESearchHistoryListResponse;