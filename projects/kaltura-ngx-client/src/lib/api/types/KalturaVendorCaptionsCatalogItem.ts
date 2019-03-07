
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaVendorCatalogItemOutputFormat } from './KalturaVendorCatalogItemOutputFormat';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorCaptionsCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    sourceLanguage? : KalturaCatalogItemLanguage;
	outputFormat? : KalturaVendorCatalogItemOutputFormat;
	enableSpeakerId? : KalturaNullableBoolean;
	fixedPriceAddons? : number;
}


export class KalturaVendorCaptionsCatalogItem extends KalturaVendorCatalogItem {

    sourceLanguage : KalturaCatalogItemLanguage;
	outputFormat : KalturaVendorCatalogItemOutputFormat;
	enableSpeakerId : KalturaNullableBoolean;
	fixedPriceAddons : number;

    constructor(data? : KalturaVendorCaptionsCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorCaptionsCatalogItem' },
				sourceLanguage : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' },
				outputFormat : { type : 'en', subTypeConstructor : KalturaVendorCatalogItemOutputFormat, subType : 'KalturaVendorCatalogItemOutputFormat' },
				enableSpeakerId : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				fixedPriceAddons : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorCaptionsCatalogItem'] = KalturaVendorCaptionsCatalogItem;