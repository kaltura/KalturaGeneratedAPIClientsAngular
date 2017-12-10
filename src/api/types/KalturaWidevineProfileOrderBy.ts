

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaWidevineProfileOrderBy extends KalturaObjectBase {
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

    static idAsc = new KalturaWidevineProfileOrderBy('+id');
	static idDesc = new KalturaWidevineProfileOrderBy('-id');
	static nameAsc = new KalturaWidevineProfileOrderBy('+name');
	static nameDesc = new KalturaWidevineProfileOrderBy('-name');
}
KalturaTypesFactory.registerType('KalturaWidevineProfileOrderBy',KalturaWidevineProfileOrderBy);