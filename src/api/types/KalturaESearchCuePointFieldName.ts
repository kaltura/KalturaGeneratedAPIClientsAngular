

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaESearchCuePointFieldName extends KalturaObjectBase {
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

    static answers = new KalturaESearchCuePointFieldName('answers');
	static endTime = new KalturaESearchCuePointFieldName('end_time');
	static explanation = new KalturaESearchCuePointFieldName('explanation');
	static hint = new KalturaESearchCuePointFieldName('hint');
	static id = new KalturaESearchCuePointFieldName('id');
	static _name = new KalturaESearchCuePointFieldName('name');
	static question = new KalturaESearchCuePointFieldName('question');
	static startTime = new KalturaESearchCuePointFieldName('start_time');
	static subType = new KalturaESearchCuePointFieldName('sub_type');
	static tags = new KalturaESearchCuePointFieldName('tags');
	static text = new KalturaESearchCuePointFieldName('text');
	static type = new KalturaESearchCuePointFieldName('type');
}
KalturaTypesFactory.registerType('KalturaESearchCuePointFieldName',KalturaESearchCuePointFieldName);