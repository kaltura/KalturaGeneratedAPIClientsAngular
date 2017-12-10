

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaFileAssetObjectType extends KalturaObjectBase {
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

    static uiConf = new KalturaFileAssetObjectType('2');
}
KalturaTypesFactory.registerType('KalturaFileAssetObjectType',KalturaFileAssetObjectType);