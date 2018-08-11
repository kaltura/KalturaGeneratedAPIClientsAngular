
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaQuestionCuePointBaseFilter, KalturaQuestionCuePointBaseFilterArgs } from './KalturaQuestionCuePointBaseFilter';

export interface KalturaQuestionCuePointFilterArgs  extends KalturaQuestionCuePointBaseFilterArgs {
    
}


export class KalturaQuestionCuePointFilter extends KalturaQuestionCuePointBaseFilter {

    

    constructor(data? : KalturaQuestionCuePointFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuestionCuePointFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaQuestionCuePointFilter'] = KalturaQuestionCuePointFilter;