

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaVirusScanProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaVirusScanProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaVirusScanProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaVirusScanProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaVirusScanProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaVirusScanProfileOrderBy',KalturaVirusScanProfileOrderBy);