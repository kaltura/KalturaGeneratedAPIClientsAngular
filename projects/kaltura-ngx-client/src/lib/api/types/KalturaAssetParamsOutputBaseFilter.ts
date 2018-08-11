
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetParamsFilter, KalturaAssetParamsFilterArgs } from './KalturaAssetParamsFilter';

export interface KalturaAssetParamsOutputBaseFilterArgs  extends KalturaAssetParamsFilterArgs {
    
}


export class KalturaAssetParamsOutputBaseFilter extends KalturaAssetParamsFilter {

    

    constructor(data? : KalturaAssetParamsOutputBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetParamsOutputBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetParamsOutputBaseFilter'] = KalturaAssetParamsOutputBaseFilter;