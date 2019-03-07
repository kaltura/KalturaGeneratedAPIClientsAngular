
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorTranslationCatalogItemBaseFilter, KalturaVendorTranslationCatalogItemBaseFilterArgs } from './KalturaVendorTranslationCatalogItemBaseFilter';

export interface KalturaVendorTranslationCatalogItemFilterArgs  extends KalturaVendorTranslationCatalogItemBaseFilterArgs {
    
}


export class KalturaVendorTranslationCatalogItemFilter extends KalturaVendorTranslationCatalogItemBaseFilter {

    

    constructor(data? : KalturaVendorTranslationCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorTranslationCatalogItemFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorTranslationCatalogItemFilter'] = KalturaVendorTranslationCatalogItemFilter;