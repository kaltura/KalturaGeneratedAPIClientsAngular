
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCodeCuePointBaseFilter, KalturaCodeCuePointBaseFilterArgs } from './KalturaCodeCuePointBaseFilter';

export interface KalturaCodeCuePointFilterArgs  extends KalturaCodeCuePointBaseFilterArgs {
    
}


export class KalturaCodeCuePointFilter extends KalturaCodeCuePointBaseFilter {

    

    constructor(data? : KalturaCodeCuePointFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCodeCuePointFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCodeCuePointFilter'] = KalturaCodeCuePointFilter;