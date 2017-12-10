

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEmailNotificationFormat extends KalturaObjectBase {
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

    static html = new KalturaEmailNotificationFormat('1');
	static text = new KalturaEmailNotificationFormat('2');
}
KalturaTypesFactory.registerType('KalturaEmailNotificationFormat',KalturaEmailNotificationFormat);