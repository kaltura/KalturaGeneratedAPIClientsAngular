
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorCatalogItemBaseFilter, KalturaVendorCatalogItemBaseFilterArgs } from './KalturaVendorCatalogItemBaseFilter';

export interface KalturaVendorCatalogItemFilterArgs  extends KalturaVendorCatalogItemBaseFilterArgs {
    partnerIdEqual? : number;
}


export class KalturaVendorCatalogItemFilter extends KalturaVendorCatalogItemBaseFilter {

    partnerIdEqual : number;

    constructor(data? : KalturaVendorCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorCatalogItemFilter' },
				partnerIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorCatalogItemFilter'] = KalturaVendorCatalogItemFilter;