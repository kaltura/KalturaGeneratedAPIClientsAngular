
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetBaseFilter, KalturaAssetBaseFilterArgs } from './KalturaAssetBaseFilter';

export interface KalturaAssetFilterArgs  extends KalturaAssetBaseFilterArgs {
    typeIn? : string;
}


export class KalturaAssetFilter extends KalturaAssetBaseFilter {

    typeIn : string;

    constructor(data? : KalturaAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetFilter' },
				typeIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetFilter'] = KalturaAssetFilter;