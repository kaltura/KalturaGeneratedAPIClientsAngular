
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorCaptionsCatalogItemBaseFilter, KalturaVendorCaptionsCatalogItemBaseFilterArgs } from './KalturaVendorCaptionsCatalogItemBaseFilter';

export interface KalturaVendorExtendedAudioDescriptionCatalogItemFilterArgs  extends KalturaVendorCaptionsCatalogItemBaseFilterArgs {
    
}


export class KalturaVendorExtendedAudioDescriptionCatalogItemFilter extends KalturaVendorCaptionsCatalogItemBaseFilter {

    

    constructor(data? : KalturaVendorExtendedAudioDescriptionCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorExtendedAudioDescriptionCatalogItemFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorExtendedAudioDescriptionCatalogItemFilter'] = KalturaVendorExtendedAudioDescriptionCatalogItemFilter;