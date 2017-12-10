

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaModerationFlagStatus extends KalturaObjectBase {
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

    static moderated = new KalturaModerationFlagStatus('2');
	static pending = new KalturaModerationFlagStatus('1');
}
KalturaTypesFactory.registerType('KalturaModerationFlagStatus',KalturaModerationFlagStatus);