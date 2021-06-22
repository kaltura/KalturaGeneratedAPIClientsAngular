
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorCatalogItemOutputFormat } from './KalturaVendorCatalogItemOutputFormat';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorAlignmentCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    outputFormat? : KalturaVendorCatalogItemOutputFormat;
}


export class KalturaVendorAlignmentCatalogItem extends KalturaVendorCatalogItem {

    outputFormat : KalturaVendorCatalogItemOutputFormat;

    constructor(data? : KalturaVendorAlignmentCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorAlignmentCatalogItem' },
				outputFormat : { type : 'en', subTypeConstructor : KalturaVendorCatalogItemOutputFormat, subType : 'KalturaVendorCatalogItemOutputFormat' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorAlignmentCatalogItem'] = KalturaVendorAlignmentCatalogItem;