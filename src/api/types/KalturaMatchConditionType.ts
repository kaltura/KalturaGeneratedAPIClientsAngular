

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMatchConditionType extends KalturaObjectBase {
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

    static matchAll = new KalturaMatchConditionType('2');
	static matchAny = new KalturaMatchConditionType('1');
}
KalturaTypesFactory.registerType('KalturaMatchConditionType',KalturaMatchConditionType);