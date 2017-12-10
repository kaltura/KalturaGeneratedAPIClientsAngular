

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaConversionProfileStatus extends KalturaObjectBase {
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

    static deleted = new KalturaConversionProfileStatus('3');
	static disabled = new KalturaConversionProfileStatus('1');
	static enabled = new KalturaConversionProfileStatus('2');
}
KalturaTypesFactory.registerType('KalturaConversionProfileStatus',KalturaConversionProfileStatus);