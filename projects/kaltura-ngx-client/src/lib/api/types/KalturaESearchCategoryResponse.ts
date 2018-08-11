
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCategoryResult } from './KalturaESearchCategoryResult';
import { KalturaESearchResponse, KalturaESearchResponseArgs } from './KalturaESearchResponse';

export interface KalturaESearchCategoryResponseArgs  extends KalturaESearchResponseArgs {
    
}


export class KalturaESearchCategoryResponse extends KalturaESearchResponse {

    readonly objects : KalturaESearchCategoryResult[];

    constructor(data? : KalturaESearchCategoryResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaESearchCategoryResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaESearchCategoryResult, subType : 'KalturaESearchCategoryResult' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchCategoryResponse'] = KalturaESearchCategoryResponse;