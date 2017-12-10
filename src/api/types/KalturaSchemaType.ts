

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaSchemaType extends KalturaObjectBase {
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

    static bulkUploadResultXml = new KalturaSchemaType('bulkUploadXml.bulkUploadResultXML');
	static bulkUploadXml = new KalturaSchemaType('bulkUploadXml.bulkUploadXML');
	static dropFolderXml = new KalturaSchemaType('dropFolderXmlBulkUpload.dropFolderXml');
	static ingestApi = new KalturaSchemaType('cuePoint.ingestAPI');
	static serveApi = new KalturaSchemaType('cuePoint.serveAPI');
	static syndication = new KalturaSchemaType('syndication');
}
KalturaTypesFactory.registerType('KalturaSchemaType',KalturaSchemaType);