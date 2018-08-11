
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmPolicy } from './KalturaDrmPolicy';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaDrmPolicyListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaDrmPolicyListResponse extends KalturaListResponse {

    readonly objects : KalturaDrmPolicy[];

    constructor(data? : KalturaDrmPolicyListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaDrmPolicyListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaDrmPolicy, subType : 'KalturaDrmPolicy' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDrmPolicyListResponse'] = KalturaDrmPolicyListResponse;