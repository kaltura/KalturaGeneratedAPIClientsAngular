
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSso } from './KalturaSso';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSsoListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaSsoListResponse extends KalturaListResponse {

    readonly objects : KalturaSso[];

    constructor(data? : KalturaSsoListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaSsoListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaSso, subType : 'KalturaSso' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSsoListResponse'] = KalturaSsoListResponse;