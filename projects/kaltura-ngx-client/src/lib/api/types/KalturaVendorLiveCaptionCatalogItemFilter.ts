
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorCaptionsCatalogItemBaseFilter, KalturaVendorCaptionsCatalogItemBaseFilterArgs } from './KalturaVendorCaptionsCatalogItemBaseFilter';

export interface KalturaVendorLiveCaptionCatalogItemFilterArgs  extends KalturaVendorCaptionsCatalogItemBaseFilterArgs {
    
}


export class KalturaVendorLiveCaptionCatalogItemFilter extends KalturaVendorCaptionsCatalogItemBaseFilter {

    

    constructor(data? : KalturaVendorLiveCaptionCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorLiveCaptionCatalogItemFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorLiveCaptionCatalogItemFilter'] = KalturaVendorLiveCaptionCatalogItemFilter;