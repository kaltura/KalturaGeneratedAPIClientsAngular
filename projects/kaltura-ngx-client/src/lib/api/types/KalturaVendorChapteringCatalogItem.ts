
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorChapteringCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    sourceLanguage? : KalturaCatalogItemLanguage;
}


export class KalturaVendorChapteringCatalogItem extends KalturaVendorCatalogItem {

    sourceLanguage : KalturaCatalogItemLanguage;

    constructor(data? : KalturaVendorChapteringCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorChapteringCatalogItem' },
				sourceLanguage : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorChapteringCatalogItem'] = KalturaVendorChapteringCatalogItem;