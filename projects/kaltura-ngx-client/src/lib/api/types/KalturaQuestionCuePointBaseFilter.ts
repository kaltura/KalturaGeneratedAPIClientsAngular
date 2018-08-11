
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCuePointFilter, KalturaCuePointFilterArgs } from './KalturaCuePointFilter';

export interface KalturaQuestionCuePointBaseFilterArgs  extends KalturaCuePointFilterArgs {
    questionLike? : string;
	questionMultiLikeOr? : string;
	questionMultiLikeAnd? : string;
}


export class KalturaQuestionCuePointBaseFilter extends KalturaCuePointFilter {

    questionLike : string;
	questionMultiLikeOr : string;
	questionMultiLikeAnd : string;

    constructor(data? : KalturaQuestionCuePointBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuestionCuePointBaseFilter' },
				questionLike : { type : 's' },
				questionMultiLikeOr : { type : 's' },
				questionMultiLikeAnd : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaQuestionCuePointBaseFilter'] = KalturaQuestionCuePointBaseFilter;