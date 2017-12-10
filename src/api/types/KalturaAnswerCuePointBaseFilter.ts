
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCuePointFilter, KalturaCuePointFilterArgs } from './KalturaCuePointFilter';

export interface KalturaAnswerCuePointBaseFilterArgs  extends KalturaCuePointFilterArgs {
    parentIdEqual? : string;
	parentIdIn? : string;
	quizUserEntryIdEqual? : string;
	quizUserEntryIdIn? : string;
}


export class KalturaAnswerCuePointBaseFilter extends KalturaCuePointFilter {

    parentIdEqual : string;
	parentIdIn : string;
	quizUserEntryIdEqual : string;
	quizUserEntryIdIn : string;

    constructor(data? : KalturaAnswerCuePointBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAnswerCuePointBaseFilter' },
				parentIdEqual : { type : 's' },
				parentIdIn : { type : 's' },
				quizUserEntryIdEqual : { type : 's' },
				quizUserEntryIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAnswerCuePointBaseFilter',KalturaAnswerCuePointBaseFilter);
