

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaWebexDropFolderFileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaWebexDropFolderFileOrderBy('+createdAt');
	static createdAtDesc = new KalturaWebexDropFolderFileOrderBy('-createdAt');
	static fileNameAsc = new KalturaWebexDropFolderFileOrderBy('+fileName');
	static fileNameDesc = new KalturaWebexDropFolderFileOrderBy('-fileName');
	static fileSizeAsc = new KalturaWebexDropFolderFileOrderBy('+fileSize');
	static fileSizeDesc = new KalturaWebexDropFolderFileOrderBy('-fileSize');
	static fileSizeLastSetAtAsc = new KalturaWebexDropFolderFileOrderBy('+fileSizeLastSetAt');
	static fileSizeLastSetAtDesc = new KalturaWebexDropFolderFileOrderBy('-fileSizeLastSetAt');
	static idAsc = new KalturaWebexDropFolderFileOrderBy('+id');
	static idDesc = new KalturaWebexDropFolderFileOrderBy('-id');
	static parsedFlavorAsc = new KalturaWebexDropFolderFileOrderBy('+parsedFlavor');
	static parsedFlavorDesc = new KalturaWebexDropFolderFileOrderBy('-parsedFlavor');
	static parsedSlugAsc = new KalturaWebexDropFolderFileOrderBy('+parsedSlug');
	static parsedSlugDesc = new KalturaWebexDropFolderFileOrderBy('-parsedSlug');
	static updatedAtAsc = new KalturaWebexDropFolderFileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaWebexDropFolderFileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaWebexDropFolderFileOrderBy',KalturaWebexDropFolderFileOrderBy);