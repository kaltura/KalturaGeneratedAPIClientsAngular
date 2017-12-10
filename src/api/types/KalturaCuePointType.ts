

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCuePointType extends KalturaObjectBase {
    private _value : string;
    constructor( value?:string | number){
        super();
        this._value = value + '';
    }

    equals(obj : this) : boolean
    {
        return obj && obj.toString() === this._value;
    }

    toString(){
        return this._value;
    }

    static ad = new KalturaCuePointType('adCuePoint.Ad');
	static annotation = new KalturaCuePointType('annotation.Annotation');
	static code = new KalturaCuePointType('codeCuePoint.Code');
	static event = new KalturaCuePointType('eventCuePoint.Event');
	static quizAnswer = new KalturaCuePointType('quiz.QUIZ_ANSWER');
	static quizQuestion = new KalturaCuePointType('quiz.QUIZ_QUESTION');
	static thumb = new KalturaCuePointType('thumbCuePoint.Thumb');
}
KalturaTypesFactory.registerType('KalturaCuePointType',KalturaCuePointType);