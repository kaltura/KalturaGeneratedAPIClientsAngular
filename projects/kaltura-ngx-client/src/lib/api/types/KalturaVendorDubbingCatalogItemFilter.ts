
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorDubbingCatalogItemBaseFilter, KalturaVendorDubbingCatalogItemBaseFilterArgs } from './KalturaVendorDubbingCatalogItemBaseFilter';

export interface KalturaVendorDubbingCatalogItemFilterArgs  extends KalturaVendorDubbingCatalogItemBaseFilterArgs {
    
}


export class KalturaVendorDubbingCatalogItemFilter extends KalturaVendorDubbingCatalogItemBaseFilter {

    

    constructor(data? : KalturaVendorDubbingCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorDubbingCatalogItemFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorDubbingCatalogItemFilter'] = KalturaVendorDubbingCatalogItemFilter;