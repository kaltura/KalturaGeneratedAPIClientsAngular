

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBulkUploadType extends KalturaObjectBase {
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

    static csv = new KalturaBulkUploadType('bulkUploadCsv.CSV');
	static dropFolderIcal = new KalturaBulkUploadType('scheduleDropFolder.DROP_FOLDER_ICAL');
	static dropFolderXml = new KalturaBulkUploadType('dropFolderXmlBulkUpload.DROP_FOLDER_XML');
	static filter = new KalturaBulkUploadType('bulkUploadFilter.FILTER');
	static ical = new KalturaBulkUploadType('scheduleBulkUpload.ICAL');
	static xml = new KalturaBulkUploadType('bulkUploadXml.XML');
}
KalturaTypesFactory.registerType('KalturaBulkUploadType',KalturaBulkUploadType);