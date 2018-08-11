
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput } from './KalturaFlavorParamsOutput';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaFlavorParamsOutputListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaFlavorParamsOutputListResponse extends KalturaListResponse {

    readonly objects : KalturaFlavorParamsOutput[];

    constructor(data? : KalturaFlavorParamsOutputListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaFlavorParamsOutputListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaFlavorParamsOutput, subType : 'KalturaFlavorParamsOutput' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFlavorParamsOutputListResponse'] = KalturaFlavorParamsOutputListResponse;