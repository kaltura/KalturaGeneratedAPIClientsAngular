

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaTaggedObjectType extends KalturaObjectBase {
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

    static category = new KalturaTaggedObjectType('2');
	static entry = new KalturaTaggedObjectType('1');
}
KalturaTypesFactory.registerType('KalturaTaggedObjectType',KalturaTaggedObjectType);