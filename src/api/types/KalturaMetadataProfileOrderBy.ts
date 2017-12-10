

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMetadataProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaMetadataProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaMetadataProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaMetadataProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaMetadataProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaMetadataProfileOrderBy',KalturaMetadataProfileOrderBy);