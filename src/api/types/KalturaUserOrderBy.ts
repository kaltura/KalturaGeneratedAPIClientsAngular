

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaUserOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaUserOrderBy('+createdAt');
	static createdAtDesc = new KalturaUserOrderBy('-createdAt');
	static idAsc = new KalturaUserOrderBy('+id');
	static idDesc = new KalturaUserOrderBy('-id');
}
KalturaTypesFactory.registerType('KalturaUserOrderBy',KalturaUserOrderBy);