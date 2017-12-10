

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveReportType extends KalturaObjectBase {
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

    static entryGeoTimeLine = new KalturaLiveReportType('ENTRY_GEO_TIME_LINE');
	static entrySyndicationTotal = new KalturaLiveReportType('ENTRY_SYNDICATION_TOTAL');
	static entryTimeLine = new KalturaLiveReportType('ENTRY_TIME_LINE');
	static entryTotal = new KalturaLiveReportType('ENTRY_TOTAL');
	static partnerTotal = new KalturaLiveReportType('PARTNER_TOTAL');
}
KalturaTypesFactory.registerType('KalturaLiveReportType',KalturaLiveReportType);