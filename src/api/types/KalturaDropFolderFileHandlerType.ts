

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDropFolderFileHandlerType extends KalturaObjectBase {
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

    static content = new KalturaDropFolderFileHandlerType('1');
	static ical = new KalturaDropFolderFileHandlerType('scheduleDropFolder.ICAL');
	static xml = new KalturaDropFolderFileHandlerType('dropFolderXmlBulkUpload.XML');
}
KalturaTypesFactory.registerType('KalturaDropFolderFileHandlerType',KalturaDropFolderFileHandlerType);