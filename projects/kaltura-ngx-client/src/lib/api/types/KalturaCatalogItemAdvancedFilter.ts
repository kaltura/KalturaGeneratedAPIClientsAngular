
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorServiceType } from './KalturaVendorServiceType';
import { KalturaVendorServiceFeature } from './KalturaVendorServiceFeature';
import { KalturaVendorServiceTurnAroundTime } from './KalturaVendorServiceTurnAroundTime';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaCatalogItemAdvancedFilterArgs  extends KalturaSearchItemArgs {
    serviceTypeEqual? : KalturaVendorServiceType;
	serviceTypeIn? : string;
	serviceFeatureEqual? : KalturaVendorServiceFeature;
	serviceFeatureIn? : string;
	turnAroundTimeEqual? : KalturaVendorServiceTurnAroundTime;
	turnAroundTimeIn? : string;
	sourceLanguageEqual? : KalturaCatalogItemLanguage;
	targetLanguageEqual? : KalturaCatalogItemLanguage;
}


export class KalturaCatalogItemAdvancedFilter extends KalturaSearchItem {

    serviceTypeEqual : KalturaVendorServiceType;
	serviceTypeIn : string;
	serviceFeatureEqual : KalturaVendorServiceFeature;
	serviceFeatureIn : string;
	turnAroundTimeEqual : KalturaVendorServiceTurnAroundTime;
	turnAroundTimeIn : string;
	sourceLanguageEqual : KalturaCatalogItemLanguage;
	targetLanguageEqual : KalturaCatalogItemLanguage;

    constructor(data? : KalturaCatalogItemAdvancedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCatalogItemAdvancedFilter' },
				serviceTypeEqual : { type : 'en', subTypeConstructor : KalturaVendorServiceType, subType : 'KalturaVendorServiceType' },
				serviceTypeIn : { type : 's' },
				serviceFeatureEqual : { type : 'en', subTypeConstructor : KalturaVendorServiceFeature, subType : 'KalturaVendorServiceFeature' },
				serviceFeatureIn : { type : 's' },
				turnAroundTimeEqual : { type : 'en', subTypeConstructor : KalturaVendorServiceTurnAroundTime, subType : 'KalturaVendorServiceTurnAroundTime' },
				turnAroundTimeIn : { type : 's' },
				sourceLanguageEqual : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' },
				targetLanguageEqual : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCatalogItemAdvancedFilter'] = KalturaCatalogItemAdvancedFilter;