
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbCuePointBaseFilter, KalturaThumbCuePointBaseFilterArgs } from './KalturaThumbCuePointBaseFilter';

export interface KalturaThumbCuePointFilterArgs  extends KalturaThumbCuePointBaseFilterArgs {
    
}


export class KalturaThumbCuePointFilter extends KalturaThumbCuePointBaseFilter {

    

    constructor(data? : KalturaThumbCuePointFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaThumbCuePointFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaThumbCuePointFilter'] = KalturaThumbCuePointFilter;