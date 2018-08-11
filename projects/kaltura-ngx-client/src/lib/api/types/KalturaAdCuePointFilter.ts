
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAdCuePointBaseFilter, KalturaAdCuePointBaseFilterArgs } from './KalturaAdCuePointBaseFilter';

export interface KalturaAdCuePointFilterArgs  extends KalturaAdCuePointBaseFilterArgs {
    
}


export class KalturaAdCuePointFilter extends KalturaAdCuePointBaseFilter {

    

    constructor(data? : KalturaAdCuePointFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAdCuePointFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAdCuePointFilter'] = KalturaAdCuePointFilter;