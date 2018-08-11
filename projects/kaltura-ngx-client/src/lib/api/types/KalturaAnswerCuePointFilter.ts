
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAnswerCuePointBaseFilter, KalturaAnswerCuePointBaseFilterArgs } from './KalturaAnswerCuePointBaseFilter';

export interface KalturaAnswerCuePointFilterArgs  extends KalturaAnswerCuePointBaseFilterArgs {
    
}


export class KalturaAnswerCuePointFilter extends KalturaAnswerCuePointBaseFilter {

    

    constructor(data? : KalturaAnswerCuePointFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAnswerCuePointFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAnswerCuePointFilter'] = KalturaAnswerCuePointFilter;