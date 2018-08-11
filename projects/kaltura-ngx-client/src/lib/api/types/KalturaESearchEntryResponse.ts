
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchEntryResult } from './KalturaESearchEntryResult';
import { KalturaESearchResponse, KalturaESearchResponseArgs } from './KalturaESearchResponse';

export interface KalturaESearchEntryResponseArgs  extends KalturaESearchResponseArgs {
    
}


export class KalturaESearchEntryResponse extends KalturaESearchResponse {

    readonly objects : KalturaESearchEntryResult[];

    constructor(data? : KalturaESearchEntryResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaESearchEntryResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaESearchEntryResult, subType : 'KalturaESearchEntryResult' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchEntryResponse'] = KalturaESearchEntryResponse;