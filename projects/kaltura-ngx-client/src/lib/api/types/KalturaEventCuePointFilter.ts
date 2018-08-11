
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventCuePointBaseFilter, KalturaEventCuePointBaseFilterArgs } from './KalturaEventCuePointBaseFilter';

export interface KalturaEventCuePointFilterArgs  extends KalturaEventCuePointBaseFilterArgs {
    
}


export class KalturaEventCuePointFilter extends KalturaEventCuePointBaseFilter {

    

    constructor(data? : KalturaEventCuePointFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventCuePointFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEventCuePointFilter'] = KalturaEventCuePointFilter;