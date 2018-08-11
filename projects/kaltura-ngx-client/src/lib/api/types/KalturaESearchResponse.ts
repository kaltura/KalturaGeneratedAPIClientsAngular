
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchResponseArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaESearchResponse extends KalturaObjectBase {

    readonly totalCount : number;

    constructor(data? : KalturaESearchResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchResponse' },
				totalCount : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchResponse'] = KalturaESearchResponse;