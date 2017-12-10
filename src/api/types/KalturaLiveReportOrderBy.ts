

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveReportOrderBy extends KalturaObjectBase {
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

    static audienceDesc = new KalturaLiveReportOrderBy('-audience');
	static eventTimeDesc = new KalturaLiveReportOrderBy('-eventTime');
	static nameAsc = new KalturaLiveReportOrderBy('+name');
	static playsDesc = new KalturaLiveReportOrderBy('-plays');
}
KalturaTypesFactory.registerType('KalturaLiveReportOrderBy',KalturaLiveReportOrderBy);