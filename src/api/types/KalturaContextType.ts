

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaContextType extends KalturaObjectBase {
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

    static download = new KalturaContextType('2');
	static export = new KalturaContextType('5');
	static metadata = new KalturaContextType('4');
	static play = new KalturaContextType('1');
	static serve = new KalturaContextType('6');
	static thumbnail = new KalturaContextType('3');
}
KalturaTypesFactory.registerType('KalturaContextType',KalturaContextType);