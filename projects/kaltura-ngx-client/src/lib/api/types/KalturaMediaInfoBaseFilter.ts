
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaMediaInfoBaseFilterArgs  extends KalturaFilterArgs {
    flavorAssetIdEqual? : string;
}


export class KalturaMediaInfoBaseFilter extends KalturaFilter {

    flavorAssetIdEqual : string;

    constructor(data? : KalturaMediaInfoBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaInfoBaseFilter' },
				flavorAssetIdEqual : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMediaInfoBaseFilter'] = KalturaMediaInfoBaseFilter;