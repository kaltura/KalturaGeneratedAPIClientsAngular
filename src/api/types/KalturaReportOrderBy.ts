

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaReportOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaReportOrderBy('+createdAt');
	static createdAtDesc = new KalturaReportOrderBy('-createdAt');
}
KalturaTypesFactory.registerType('KalturaReportOrderBy',KalturaReportOrderBy);