

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaModerationObjectType extends KalturaObjectBase {
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

    static entry = new KalturaModerationObjectType('2');
	static user = new KalturaModerationObjectType('3');
}
KalturaTypesFactory.registerType('KalturaModerationObjectType',KalturaModerationObjectType);