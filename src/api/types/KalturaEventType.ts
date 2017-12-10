

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEventType extends KalturaObjectBase {
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

    static broadcastEnd = new KalturaEventType('2');
	static broadcastStart = new KalturaEventType('1');
}
KalturaTypesFactory.registerType('KalturaEventType',KalturaEventType);