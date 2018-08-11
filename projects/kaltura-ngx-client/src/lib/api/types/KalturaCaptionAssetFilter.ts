
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCaptionAssetBaseFilter, KalturaCaptionAssetBaseFilterArgs } from './KalturaCaptionAssetBaseFilter';

export interface KalturaCaptionAssetFilterArgs  extends KalturaCaptionAssetBaseFilterArgs {
    
}


export class KalturaCaptionAssetFilter extends KalturaCaptionAssetBaseFilter {

    

    constructor(data? : KalturaCaptionAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCaptionAssetFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCaptionAssetFilter'] = KalturaCaptionAssetFilter;