

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBulkUploadAction extends KalturaObjectBase {
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

    static add = new KalturaBulkUploadAction('1');
	static addOrUpdate = new KalturaBulkUploadAction('6');
	static cancel = new KalturaBulkUploadAction('scheduleBulkUpload.CANCEL');
	static delete = new KalturaBulkUploadAction('3');
	static replace = new KalturaBulkUploadAction('4');
	static transformXslt = new KalturaBulkUploadAction('5');
	static update = new KalturaBulkUploadAction('2');
}
KalturaTypesFactory.registerType('KalturaBulkUploadAction',KalturaBulkUploadAction);