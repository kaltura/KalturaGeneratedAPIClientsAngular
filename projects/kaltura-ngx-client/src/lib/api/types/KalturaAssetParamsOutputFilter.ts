
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetParamsOutputBaseFilter, KalturaAssetParamsOutputBaseFilterArgs } from './KalturaAssetParamsOutputBaseFilter';

export interface KalturaAssetParamsOutputFilterArgs  extends KalturaAssetParamsOutputBaseFilterArgs {
    
}


export class KalturaAssetParamsOutputFilter extends KalturaAssetParamsOutputBaseFilter {

    

    constructor(data? : KalturaAssetParamsOutputFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetParamsOutputFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetParamsOutputFilter'] = KalturaAssetParamsOutputFilter;