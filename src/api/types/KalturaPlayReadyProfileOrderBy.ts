

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPlayReadyProfileOrderBy extends KalturaObjectBase {
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

    static idAsc = new KalturaPlayReadyProfileOrderBy('+id');
	static idDesc = new KalturaPlayReadyProfileOrderBy('-id');
	static nameAsc = new KalturaPlayReadyProfileOrderBy('+name');
	static nameDesc = new KalturaPlayReadyProfileOrderBy('-name');
}
KalturaTypesFactory.registerType('KalturaPlayReadyProfileOrderBy',KalturaPlayReadyProfileOrderBy);