
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchGroupResult } from './KalturaESearchGroupResult';
import { KalturaESearchResponse, KalturaESearchResponseArgs } from './KalturaESearchResponse';

export interface KalturaESearchGroupResponseArgs  extends KalturaESearchResponseArgs {
    
}


export class KalturaESearchGroupResponse extends KalturaESearchResponse {

    readonly objects : KalturaESearchGroupResult[];

    constructor(data? : KalturaESearchGroupResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaESearchGroupResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaESearchGroupResult, subType : 'KalturaESearchGroupResult' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchGroupResponse'] = KalturaESearchGroupResponse;