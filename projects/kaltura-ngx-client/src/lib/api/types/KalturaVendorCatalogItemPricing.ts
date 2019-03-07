
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorCatalogItemPriceFunction } from './KalturaVendorCatalogItemPriceFunction';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaVendorCatalogItemPricingArgs  extends KalturaObjectBaseArgs {
    pricePerUnit? : number;
	priceFunction? : KalturaVendorCatalogItemPriceFunction;
}


export class KalturaVendorCatalogItemPricing extends KalturaObjectBase {

    pricePerUnit : number;
	priceFunction : KalturaVendorCatalogItemPriceFunction;

    constructor(data? : KalturaVendorCatalogItemPricingArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorCatalogItemPricing' },
				pricePerUnit : { type : 'n' },
				priceFunction : { type : 'es', subTypeConstructor : KalturaVendorCatalogItemPriceFunction, subType : 'KalturaVendorCatalogItemPriceFunction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorCatalogItemPricing'] = KalturaVendorCatalogItemPricing;