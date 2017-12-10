

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDropFolderFileErrorCode extends KalturaObjectBase {
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

    static errorAddingBulkUpload = new KalturaDropFolderFileErrorCode('dropFolderXmlBulkUpload.ERROR_ADDING_BULK_UPLOAD');
	static errorAddingContentProcessor = new KalturaDropFolderFileErrorCode('10');
	static errorAddContentResource = new KalturaDropFolderFileErrorCode('dropFolderXmlBulkUpload.ERROR_ADD_CONTENT_RESOURCE');
	static errorAddEntry = new KalturaDropFolderFileErrorCode('2');
	static errorDeletingFile = new KalturaDropFolderFileErrorCode('12');
	static errorDownloadingFile = new KalturaDropFolderFileErrorCode('7');
	static errorInBulkUpload = new KalturaDropFolderFileErrorCode('dropFolderXmlBulkUpload.ERROR_IN_BULK_UPLOAD');
	static errorInContentProcessor = new KalturaDropFolderFileErrorCode('11');
	static errorReadingFile = new KalturaDropFolderFileErrorCode('6');
	static errorUpdateEntry = new KalturaDropFolderFileErrorCode('1');
	static errorUpdateFile = new KalturaDropFolderFileErrorCode('8');
	static errorWritingTempFile = new KalturaDropFolderFileErrorCode('dropFolderXmlBulkUpload.ERROR_WRITING_TEMP_FILE');
	static fileNoMatch = new KalturaDropFolderFileErrorCode('13');
	static flavorMissingInFileName = new KalturaDropFolderFileErrorCode('4');
	static flavorNotFound = new KalturaDropFolderFileErrorCode('3');
	static localFileWrongChecksum = new KalturaDropFolderFileErrorCode('dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_CHECKSUM');
	static localFileWrongSize = new KalturaDropFolderFileErrorCode('dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_SIZE');
	static malformedXmlFile = new KalturaDropFolderFileErrorCode('dropFolderXmlBulkUpload.MALFORMED_XML_FILE');
	static slugRegexNoMatch = new KalturaDropFolderFileErrorCode('5');
	static xmlFileSizeExceedLimit = new KalturaDropFolderFileErrorCode('dropFolderXmlBulkUpload.XML_FILE_SIZE_EXCEED_LIMIT');
}
KalturaTypesFactory.registerType('KalturaDropFolderFileErrorCode',KalturaDropFolderFileErrorCode);