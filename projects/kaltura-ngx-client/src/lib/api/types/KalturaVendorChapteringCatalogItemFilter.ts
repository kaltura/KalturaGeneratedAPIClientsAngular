
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorCaptionsCatalogItemBaseFilter, KalturaVendorCaptionsCatalogItemBaseFilterArgs } from './KalturaVendorCaptionsCatalogItemBaseFilter';

export interface KalturaVendorChapteringCatalogItemFilterArgs  extends KalturaVendorCaptionsCatalogItemBaseFilterArgs {
    
}


export class KalturaVendorChapteringCatalogItemFilter extends KalturaVendorCaptionsCatalogItemBaseFilter {

    

    constructor(data? : KalturaVendorChapteringCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorChapteringCatalogItemFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorChapteringCatalogItemFilter'] = KalturaVendorChapteringCatalogItemFilter;