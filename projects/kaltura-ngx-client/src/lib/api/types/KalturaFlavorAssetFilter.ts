
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorAssetBaseFilter, KalturaFlavorAssetBaseFilterArgs } from './KalturaFlavorAssetBaseFilter';

export interface KalturaFlavorAssetFilterArgs  extends KalturaFlavorAssetBaseFilterArgs {
    
}


export class KalturaFlavorAssetFilter extends KalturaFlavorAssetBaseFilter {

    

    constructor(data? : KalturaFlavorAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFlavorAssetFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFlavorAssetFilter'] = KalturaFlavorAssetFilter;