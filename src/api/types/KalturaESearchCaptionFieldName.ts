

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaESearchCaptionFieldName extends KalturaObjectBase {
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

    static content = new KalturaESearchCaptionFieldName('content');
	static endTime = new KalturaESearchCaptionFieldName('end_time');
	static startTime = new KalturaESearchCaptionFieldName('start_time');
}
KalturaTypesFactory.registerType('KalturaESearchCaptionFieldName',KalturaESearchCaptionFieldName);