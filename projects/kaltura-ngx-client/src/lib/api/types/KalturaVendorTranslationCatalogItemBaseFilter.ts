
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaVendorCaptionsCatalogItemFilter, KalturaVendorCaptionsCatalogItemFilterArgs } from './KalturaVendorCaptionsCatalogItemFilter';

export interface KalturaVendorTranslationCatalogItemBaseFilterArgs  extends KalturaVendorCaptionsCatalogItemFilterArgs {
    targetLanguageEqual? : KalturaCatalogItemLanguage;
	targetLanguageIn? : string;
}


export class KalturaVendorTranslationCatalogItemBaseFilter extends KalturaVendorCaptionsCatalogItemFilter {

    targetLanguageEqual : KalturaCatalogItemLanguage;
	targetLanguageIn : string;

    constructor(data? : KalturaVendorTranslationCatalogItemBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorTranslationCatalogItemBaseFilter' },
				targetLanguageEqual : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' },
				targetLanguageIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorTranslationCatalogItemBaseFilter'] = KalturaVendorTranslationCatalogItemBaseFilter;