

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaGroupUserOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaGroupUserOrderBy('+createdAt');
	static createdAtDesc = new KalturaGroupUserOrderBy('-createdAt');
	static updatedAtAsc = new KalturaGroupUserOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaGroupUserOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaGroupUserOrderBy',KalturaGroupUserOrderBy);