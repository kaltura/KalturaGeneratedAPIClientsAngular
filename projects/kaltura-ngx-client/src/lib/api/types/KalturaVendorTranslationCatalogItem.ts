
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaVendorCaptionsCatalogItem, KalturaVendorCaptionsCatalogItemArgs } from './KalturaVendorCaptionsCatalogItem';

export interface KalturaVendorTranslationCatalogItemArgs  extends KalturaVendorCaptionsCatalogItemArgs {
    targetLanguage? : KalturaCatalogItemLanguage;
}


export class KalturaVendorTranslationCatalogItem extends KalturaVendorCaptionsCatalogItem {

    targetLanguage : KalturaCatalogItemLanguage;

    constructor(data? : KalturaVendorTranslationCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorTranslationCatalogItem' },
				targetLanguage : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorTranslationCatalogItem'] = KalturaVendorTranslationCatalogItem;