

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAuditTrailOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaAuditTrailOrderBy('+createdAt');
	static createdAtDesc = new KalturaAuditTrailOrderBy('-createdAt');
	static parsedAtAsc = new KalturaAuditTrailOrderBy('+parsedAt');
	static parsedAtDesc = new KalturaAuditTrailOrderBy('-parsedAt');
}
KalturaTypesFactory.registerType('KalturaAuditTrailOrderBy',KalturaAuditTrailOrderBy);