

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEntryServerNodeType extends KalturaObjectBase {
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

    static liveBackup = new KalturaEntryServerNodeType('1');
	static livePrimary = new KalturaEntryServerNodeType('0');
}
KalturaTypesFactory.registerType('KalturaEntryServerNodeType',KalturaEntryServerNodeType);