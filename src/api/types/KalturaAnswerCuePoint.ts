
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaString } from './KalturaString';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';

export interface KalturaAnswerCuePointArgs  extends KalturaCuePointArgs {
    parentId? : string;
	quizUserEntryId? : string;
	answerKey? : string;
}


export class KalturaAnswerCuePoint extends KalturaCuePoint {

    parentId : string;
	quizUserEntryId : string;
	answerKey : string;
	readonly isCorrect : KalturaNullableBoolean;
	readonly correctAnswerKeys : KalturaString[];
	readonly explanation : string;

    constructor(data? : KalturaAnswerCuePointArgs)
    {
        super(data);
        if (typeof this.correctAnswerKeys === 'undefined') this.correctAnswerKeys = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAnswerCuePoint' },
				parentId : { type : 's' },
				quizUserEntryId : { type : 's' },
				answerKey : { type : 's' },
				isCorrect : { type : 'en', readOnly : true, subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				correctAnswerKeys : { type : 'a', readOnly : true, subTypeConstructor : KalturaString, subType : 'KalturaString' },
				explanation : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAnswerCuePoint',KalturaAnswerCuePoint);
