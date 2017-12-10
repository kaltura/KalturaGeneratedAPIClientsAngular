

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBusinessProcessServerStatus extends KalturaObjectBase {
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

    static deleted = new KalturaBusinessProcessServerStatus('3');
	static disabled = new KalturaBusinessProcessServerStatus('1');
	static enabled = new KalturaBusinessProcessServerStatus('2');
}
KalturaTypesFactory.registerType('KalturaBusinessProcessServerStatus',KalturaBusinessProcessServerStatus);