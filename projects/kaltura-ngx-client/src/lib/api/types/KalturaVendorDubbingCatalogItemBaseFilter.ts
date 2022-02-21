
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaVendorCatalogItemFilter, KalturaVendorCatalogItemFilterArgs } from './KalturaVendorCatalogItemFilter';

export interface KalturaVendorDubbingCatalogItemBaseFilterArgs  extends KalturaVendorCatalogItemFilterArgs {
    targetLanguageEqual? : KalturaCatalogItemLanguage;
	targetLanguageIn? : string;
}


export class KalturaVendorDubbingCatalogItemBaseFilter extends KalturaVendorCatalogItemFilter {

    targetLanguageEqual : KalturaCatalogItemLanguage;
	targetLanguageIn : string;

    constructor(data? : KalturaVendorDubbingCatalogItemBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorDubbingCatalogItemBaseFilter' },
				targetLanguageEqual : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' },
				targetLanguageIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorDubbingCatalogItemBaseFilter'] = KalturaVendorDubbingCatalogItemBaseFilter;