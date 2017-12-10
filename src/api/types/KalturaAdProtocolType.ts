

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAdProtocolType extends KalturaObjectBase {
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

    static custom = new KalturaAdProtocolType('0');
	static vast = new KalturaAdProtocolType('1');
	static vast20 = new KalturaAdProtocolType('2');
	static vpaid = new KalturaAdProtocolType('3');
}
KalturaTypesFactory.registerType('KalturaAdProtocolType',KalturaAdProtocolType);