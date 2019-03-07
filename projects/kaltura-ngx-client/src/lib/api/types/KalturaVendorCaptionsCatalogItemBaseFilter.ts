
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaVendorCatalogItemOutputFormat } from './KalturaVendorCatalogItemOutputFormat';
import { KalturaVendorCatalogItemFilter, KalturaVendorCatalogItemFilterArgs } from './KalturaVendorCatalogItemFilter';

export interface KalturaVendorCaptionsCatalogItemBaseFilterArgs  extends KalturaVendorCatalogItemFilterArgs {
    sourceLanguageEqual? : KalturaCatalogItemLanguage;
	sourceLanguageIn? : string;
	outputFormatEqual? : KalturaVendorCatalogItemOutputFormat;
	outputFormatIn? : string;
}


export class KalturaVendorCaptionsCatalogItemBaseFilter extends KalturaVendorCatalogItemFilter {

    sourceLanguageEqual : KalturaCatalogItemLanguage;
	sourceLanguageIn : string;
	outputFormatEqual : KalturaVendorCatalogItemOutputFormat;
	outputFormatIn : string;

    constructor(data? : KalturaVendorCaptionsCatalogItemBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorCaptionsCatalogItemBaseFilter' },
				sourceLanguageEqual : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' },
				sourceLanguageIn : { type : 's' },
				outputFormatEqual : { type : 'en', subTypeConstructor : KalturaVendorCatalogItemOutputFormat, subType : 'KalturaVendorCatalogItemOutputFormat' },
				outputFormatIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorCaptionsCatalogItemBaseFilter'] = KalturaVendorCaptionsCatalogItemBaseFilter;