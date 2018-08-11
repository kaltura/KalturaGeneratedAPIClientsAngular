
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMixEntry } from './KalturaMixEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaMixListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaMixListResponse extends KalturaListResponse {

    readonly objects : KalturaMixEntry[];

    constructor(data? : KalturaMixListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaMixListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaMixEntry, subType : 'KalturaMixEntry' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMixListResponse'] = KalturaMixListResponse;