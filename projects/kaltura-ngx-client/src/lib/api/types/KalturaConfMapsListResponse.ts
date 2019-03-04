
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfMaps } from './KalturaConfMaps';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaConfMapsListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaConfMapsListResponse extends KalturaListResponse {

    readonly objects : KalturaConfMaps[];

    constructor(data? : KalturaConfMapsListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaConfMapsListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaConfMaps, subType : 'KalturaConfMaps' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaConfMapsListResponse'] = KalturaConfMapsListResponse;