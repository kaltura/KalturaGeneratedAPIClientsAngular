
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorCatalogItem } from './KalturaVendorCatalogItem';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaVendorCatalogItemListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaVendorCatalogItemListResponse extends KalturaListResponse {

    readonly objects : KalturaVendorCatalogItem[];

    constructor(data? : KalturaVendorCatalogItemListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaVendorCatalogItemListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaVendorCatalogItem, subType : 'KalturaVendorCatalogItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorCatalogItemListResponse'] = KalturaVendorCatalogItemListResponse;