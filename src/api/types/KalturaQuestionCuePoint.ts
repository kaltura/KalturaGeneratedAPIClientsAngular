
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaOptionalAnswer } from './KalturaOptionalAnswer';
import { KalturaQuestionType } from './KalturaQuestionType';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';

export interface KalturaQuestionCuePointArgs  extends KalturaCuePointArgs {
    optionalAnswers? : KalturaOptionalAnswer[];
	hint? : string;
	question? : string;
	explanation? : string;
	questionType? : KalturaQuestionType;
	presentationOrder? : number;
}


export class KalturaQuestionCuePoint extends KalturaCuePoint {

    optionalAnswers : KalturaOptionalAnswer[];
	hint : string;
	question : string;
	explanation : string;
	questionType : KalturaQuestionType;
	presentationOrder : number;

    constructor(data? : KalturaQuestionCuePointArgs)
    {
        super(data);
        if (typeof this.optionalAnswers === 'undefined') this.optionalAnswers = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuestionCuePoint' },
				optionalAnswers : { type : 'a', subTypeConstructor : KalturaOptionalAnswer, subType : 'KalturaOptionalAnswer' },
				hint : { type : 's' },
				question : { type : 's' },
				explanation : { type : 's' },
				questionType : { type : 'en', subTypeConstructor : KalturaQuestionType, subType : 'KalturaQuestionType' },
				presentationOrder : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaQuestionCuePoint',KalturaQuestionCuePoint);
