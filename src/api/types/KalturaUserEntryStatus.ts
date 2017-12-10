

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaUserEntryStatus extends KalturaObjectBase {
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

    static active = new KalturaUserEntryStatus('1');
	static deleted = new KalturaUserEntryStatus('2');
	static quizSubmitted = new KalturaUserEntryStatus('quiz.3');
}
KalturaTypesFactory.registerType('KalturaUserEntryStatus',KalturaUserEntryStatus);