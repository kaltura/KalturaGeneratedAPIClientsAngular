
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaScoreType } from './KalturaScoreType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaQuizArgs  extends KalturaObjectBaseArgs {
    uiAttributes? : KalturaKeyValue[];
	showResultOnAnswer? : KalturaNullableBoolean;
	showCorrectKeyOnAnswer? : KalturaNullableBoolean;
	allowAnswerUpdate? : KalturaNullableBoolean;
	showCorrectAfterSubmission? : KalturaNullableBoolean;
	allowDownload? : KalturaNullableBoolean;
	showGradeAfterSubmission? : KalturaNullableBoolean;
	maxRetakesAllowed? : number;
	scoreType? : KalturaScoreType;
}


export class KalturaQuiz extends KalturaObjectBase {

    readonly version : number;
	uiAttributes : KalturaKeyValue[];
	showResultOnAnswer : KalturaNullableBoolean;
	showCorrectKeyOnAnswer : KalturaNullableBoolean;
	allowAnswerUpdate : KalturaNullableBoolean;
	showCorrectAfterSubmission : KalturaNullableBoolean;
	allowDownload : KalturaNullableBoolean;
	showGradeAfterSubmission : KalturaNullableBoolean;
	maxRetakesAllowed : number;
	scoreType : KalturaScoreType;

    constructor(data? : KalturaQuizArgs)
    {
        super(data);
        if (typeof this.uiAttributes === 'undefined') this.uiAttributes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuiz' },
				version : { type : 'n', readOnly : true },
				uiAttributes : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				showResultOnAnswer : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				showCorrectKeyOnAnswer : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				allowAnswerUpdate : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				showCorrectAfterSubmission : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				allowDownload : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				showGradeAfterSubmission : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				maxRetakesAllowed : { type : 'n' },
				scoreType : { type : 'en', subTypeConstructor : KalturaScoreType, subType : 'KalturaScoreType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaQuiz'] = KalturaQuiz;