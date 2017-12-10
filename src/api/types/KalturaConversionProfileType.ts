

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaConversionProfileType extends KalturaObjectBase {
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

    static liveStream = new KalturaConversionProfileType('2');
	static media = new KalturaConversionProfileType('1');
}
KalturaTypesFactory.registerType('KalturaConversionProfileType',KalturaConversionProfileType);