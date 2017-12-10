

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDrmProfileOrderBy extends KalturaObjectBase {
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

    static idAsc = new KalturaDrmProfileOrderBy('+id');
	static idDesc = new KalturaDrmProfileOrderBy('-id');
	static nameAsc = new KalturaDrmProfileOrderBy('+name');
	static nameDesc = new KalturaDrmProfileOrderBy('-name');
}
KalturaTypesFactory.registerType('KalturaDrmProfileOrderBy',KalturaDrmProfileOrderBy);