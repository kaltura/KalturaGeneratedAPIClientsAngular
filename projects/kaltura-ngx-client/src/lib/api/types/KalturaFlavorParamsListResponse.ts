
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaFlavorParamsListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaFlavorParamsListResponse extends KalturaListResponse {

    readonly objects : KalturaFlavorParams[];

    constructor(data? : KalturaFlavorParamsListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaFlavorParamsListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaFlavorParams, subType : 'KalturaFlavorParams' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFlavorParamsListResponse'] = KalturaFlavorParamsListResponse;