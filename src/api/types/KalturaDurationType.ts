

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDurationType extends KalturaObjectBase {
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

    static long = new KalturaDurationType('long');
	static medium = new KalturaDurationType('medium');
	static notAvailable = new KalturaDurationType('notavailable');
	static short = new KalturaDurationType('short');
}
KalturaTypesFactory.registerType('KalturaDurationType',KalturaDurationType);