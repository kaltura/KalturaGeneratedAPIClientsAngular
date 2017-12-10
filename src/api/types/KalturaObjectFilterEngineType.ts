

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaObjectFilterEngineType extends KalturaObjectBase {
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

    static entry = new KalturaObjectFilterEngineType('1');
}
KalturaTypesFactory.registerType('KalturaObjectFilterEngineType',KalturaObjectFilterEngineType);