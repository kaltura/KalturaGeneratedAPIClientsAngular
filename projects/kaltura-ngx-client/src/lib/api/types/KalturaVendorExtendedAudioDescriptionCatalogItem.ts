
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorCatalogItemOutputFormat } from './KalturaVendorCatalogItemOutputFormat';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorExtendedAudioDescriptionCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    flavorParamsId? : number;
	clearAudioFlavorParamsId? : number;
	outputFormat? : KalturaVendorCatalogItemOutputFormat;
}


export class KalturaVendorExtendedAudioDescriptionCatalogItem extends KalturaVendorCatalogItem {

    flavorParamsId : number;
	clearAudioFlavorParamsId : number;
	outputFormat : KalturaVendorCatalogItemOutputFormat;

    constructor(data? : KalturaVendorExtendedAudioDescriptionCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorExtendedAudioDescriptionCatalogItem' },
				flavorParamsId : { type : 'n' },
				clearAudioFlavorParamsId : { type : 'n' },
				outputFormat : { type : 'en', subTypeConstructor : KalturaVendorCatalogItemOutputFormat, subType : 'KalturaVendorCatalogItemOutputFormat' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorExtendedAudioDescriptionCatalogItem'] = KalturaVendorExtendedAudioDescriptionCatalogItem;