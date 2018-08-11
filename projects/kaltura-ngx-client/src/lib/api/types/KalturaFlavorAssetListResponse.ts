
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaFlavorAssetListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaFlavorAssetListResponse extends KalturaListResponse {

    readonly objects : KalturaFlavorAsset[];

    constructor(data? : KalturaFlavorAssetListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaFlavorAssetListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaFlavorAsset, subType : 'KalturaFlavorAsset' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFlavorAssetListResponse'] = KalturaFlavorAssetListResponse;