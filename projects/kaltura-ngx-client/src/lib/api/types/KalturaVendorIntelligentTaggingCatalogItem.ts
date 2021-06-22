
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorIntelligentTaggingCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorIntelligentTaggingCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorIntelligentTaggingCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorIntelligentTaggingCatalogItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorIntelligentTaggingCatalogItem'] = KalturaVendorIntelligentTaggingCatalogItem;