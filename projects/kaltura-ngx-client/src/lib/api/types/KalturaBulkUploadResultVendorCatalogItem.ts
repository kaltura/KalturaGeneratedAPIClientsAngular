
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorServiceFeature } from './KalturaVendorServiceFeature';
import { KalturaVendorServiceType } from './KalturaVendorServiceType';
import { KalturaVendorServiceTurnAroundTime } from './KalturaVendorServiceTurnAroundTime';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaVendorCatalogItemOutputFormat } from './KalturaVendorCatalogItemOutputFormat';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaVendorCatalogItemPricing } from './KalturaVendorCatalogItemPricing';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadResultVendorCatalogItemArgs  extends KalturaBulkUploadResultArgs {
    vendorCatalogItemId? : number;
	vendorPartnerId? : number;
	name? : string;
	systemName? : string;
	serviceFeature? : KalturaVendorServiceFeature;
	serviceType? : KalturaVendorServiceType;
	turnAroundTime? : KalturaVendorServiceTurnAroundTime;
	sourceLanguage? : KalturaCatalogItemLanguage;
	targetLanguage? : KalturaCatalogItemLanguage;
	outputFormat? : KalturaVendorCatalogItemOutputFormat;
	enableSpeakerId? : KalturaNullableBoolean;
	fixedPriceAddons? : number;
	pricing? : KalturaVendorCatalogItemPricing;
	flavorParamsId? : number;
	clearAudioFlavorParamsId? : number;
}


export class KalturaBulkUploadResultVendorCatalogItem extends KalturaBulkUploadResult {

    vendorCatalogItemId : number;
	vendorPartnerId : number;
	name : string;
	systemName : string;
	serviceFeature : KalturaVendorServiceFeature;
	serviceType : KalturaVendorServiceType;
	turnAroundTime : KalturaVendorServiceTurnAroundTime;
	sourceLanguage : KalturaCatalogItemLanguage;
	targetLanguage : KalturaCatalogItemLanguage;
	outputFormat : KalturaVendorCatalogItemOutputFormat;
	enableSpeakerId : KalturaNullableBoolean;
	fixedPriceAddons : number;
	pricing : KalturaVendorCatalogItemPricing;
	flavorParamsId : number;
	clearAudioFlavorParamsId : number;

    constructor(data? : KalturaBulkUploadResultVendorCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadResultVendorCatalogItem' },
				vendorCatalogItemId : { type : 'n' },
				vendorPartnerId : { type : 'n' },
				name : { type : 's' },
				systemName : { type : 's' },
				serviceFeature : { type : 'en', subTypeConstructor : KalturaVendorServiceFeature, subType : 'KalturaVendorServiceFeature' },
				serviceType : { type : 'en', subTypeConstructor : KalturaVendorServiceType, subType : 'KalturaVendorServiceType' },
				turnAroundTime : { type : 'en', subTypeConstructor : KalturaVendorServiceTurnAroundTime, subType : 'KalturaVendorServiceTurnAroundTime' },
				sourceLanguage : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' },
				targetLanguage : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' },
				outputFormat : { type : 'en', subTypeConstructor : KalturaVendorCatalogItemOutputFormat, subType : 'KalturaVendorCatalogItemOutputFormat' },
				enableSpeakerId : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				fixedPriceAddons : { type : 'n' },
				pricing : { type : 'o', subTypeConstructor : KalturaVendorCatalogItemPricing, subType : 'KalturaVendorCatalogItemPricing' },
				flavorParamsId : { type : 'n' },
				clearAudioFlavorParamsId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadResultVendorCatalogItem'] = KalturaBulkUploadResultVendorCatalogItem;