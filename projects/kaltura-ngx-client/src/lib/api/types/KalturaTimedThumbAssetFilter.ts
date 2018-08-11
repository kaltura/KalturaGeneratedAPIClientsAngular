
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaTimedThumbAssetBaseFilter, KalturaTimedThumbAssetBaseFilterArgs } from './KalturaTimedThumbAssetBaseFilter';

export interface KalturaTimedThumbAssetFilterArgs  extends KalturaTimedThumbAssetBaseFilterArgs {
    
}


export class KalturaTimedThumbAssetFilter extends KalturaTimedThumbAssetBaseFilter {

    

    constructor(data? : KalturaTimedThumbAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTimedThumbAssetFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTimedThumbAssetFilter'] = KalturaTimedThumbAssetFilter;