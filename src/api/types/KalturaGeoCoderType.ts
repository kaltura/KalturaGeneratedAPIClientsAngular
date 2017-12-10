

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaGeoCoderType extends KalturaObjectBase {
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

    static digitalElement = new KalturaGeoCoderType('3');
	static kaltura = new KalturaGeoCoderType('1');
	static maxMind = new KalturaGeoCoderType('2');
}
KalturaTypesFactory.registerType('KalturaGeoCoderType',KalturaGeoCoderType);