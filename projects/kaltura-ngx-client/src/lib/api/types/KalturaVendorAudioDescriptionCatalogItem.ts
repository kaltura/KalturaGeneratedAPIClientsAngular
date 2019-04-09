
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorAudioDescriptionCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    sourceLanguage? : KalturaCatalogItemLanguage;
	flavorParamsId? : number;
}


export class KalturaVendorAudioDescriptionCatalogItem extends KalturaVendorCatalogItem {

    sourceLanguage : KalturaCatalogItemLanguage;
	flavorParamsId : number;

    constructor(data? : KalturaVendorAudioDescriptionCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorAudioDescriptionCatalogItem' },
				sourceLanguage : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' },
				flavorParamsId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorAudioDescriptionCatalogItem'] = KalturaVendorAudioDescriptionCatalogItem;