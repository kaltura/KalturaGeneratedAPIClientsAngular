
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorCaptionsCatalogItemBaseFilter, KalturaVendorCaptionsCatalogItemBaseFilterArgs } from './KalturaVendorCaptionsCatalogItemBaseFilter';

export interface KalturaVendorAudioDescriptionCatalogItemFilterArgs  extends KalturaVendorCaptionsCatalogItemBaseFilterArgs {
    
}


export class KalturaVendorAudioDescriptionCatalogItemFilter extends KalturaVendorCaptionsCatalogItemBaseFilter {

    

    constructor(data? : KalturaVendorAudioDescriptionCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorAudioDescriptionCatalogItemFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorAudioDescriptionCatalogItemFilter'] = KalturaVendorAudioDescriptionCatalogItemFilter;