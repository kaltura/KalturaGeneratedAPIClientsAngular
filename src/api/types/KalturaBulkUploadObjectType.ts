

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBulkUploadObjectType extends KalturaObjectBase {
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

    static category = new KalturaBulkUploadObjectType('2');
	static categoryEntry = new KalturaBulkUploadObjectType('5');
	static categoryUser = new KalturaBulkUploadObjectType('4');
	static entry = new KalturaBulkUploadObjectType('1');
	static scheduleEvent = new KalturaBulkUploadObjectType('scheduleBulkUpload.SCHEDULE_EVENT');
	static scheduleResource = new KalturaBulkUploadObjectType('scheduleBulkUpload.SCHEDULE_RESOURCE');
	static user = new KalturaBulkUploadObjectType('3');
}
KalturaTypesFactory.registerType('KalturaBulkUploadObjectType',KalturaBulkUploadObjectType);