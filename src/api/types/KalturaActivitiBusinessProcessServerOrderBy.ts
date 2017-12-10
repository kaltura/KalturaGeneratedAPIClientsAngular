

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaActivitiBusinessProcessServerOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaActivitiBusinessProcessServerOrderBy('+createdAt');
	static createdAtDesc = new KalturaActivitiBusinessProcessServerOrderBy('-createdAt');
	static updatedAtAsc = new KalturaActivitiBusinessProcessServerOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaActivitiBusinessProcessServerOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaActivitiBusinessProcessServerOrderBy',KalturaActivitiBusinessProcessServerOrderBy);