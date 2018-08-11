
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaListResponseArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaListResponse extends KalturaObjectBase {

    readonly totalCount : number;

    constructor(data? : KalturaListResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaListResponse' },
				totalCount : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaListResponse'] = KalturaListResponse;