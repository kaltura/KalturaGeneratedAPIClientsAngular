
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorDubbingCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    flavorParamsId? : number;
	clearAudioFlavorParamsId? : number;
	targetLanguage? : KalturaCatalogItemLanguage;
}


export class KalturaVendorDubbingCatalogItem extends KalturaVendorCatalogItem {

    flavorParamsId : number;
	clearAudioFlavorParamsId : number;
	targetLanguage : KalturaCatalogItemLanguage;

    constructor(data? : KalturaVendorDubbingCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorDubbingCatalogItem' },
				flavorParamsId : { type : 'n' },
				clearAudioFlavorParamsId : { type : 'n' },
				targetLanguage : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorDubbingCatalogItem'] = KalturaVendorDubbingCatalogItem;