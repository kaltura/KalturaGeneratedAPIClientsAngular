

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDropFolderFileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDropFolderFileOrderBy('+createdAt');
	static createdAtDesc = new KalturaDropFolderFileOrderBy('-createdAt');
	static fileNameAsc = new KalturaDropFolderFileOrderBy('+fileName');
	static fileNameDesc = new KalturaDropFolderFileOrderBy('-fileName');
	static fileSizeAsc = new KalturaDropFolderFileOrderBy('+fileSize');
	static fileSizeDesc = new KalturaDropFolderFileOrderBy('-fileSize');
	static fileSizeLastSetAtAsc = new KalturaDropFolderFileOrderBy('+fileSizeLastSetAt');
	static fileSizeLastSetAtDesc = new KalturaDropFolderFileOrderBy('-fileSizeLastSetAt');
	static idAsc = new KalturaDropFolderFileOrderBy('+id');
	static idDesc = new KalturaDropFolderFileOrderBy('-id');
	static parsedFlavorAsc = new KalturaDropFolderFileOrderBy('+parsedFlavor');
	static parsedFlavorDesc = new KalturaDropFolderFileOrderBy('-parsedFlavor');
	static parsedSlugAsc = new KalturaDropFolderFileOrderBy('+parsedSlug');
	static parsedSlugDesc = new KalturaDropFolderFileOrderBy('-parsedSlug');
	static updatedAtAsc = new KalturaDropFolderFileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDropFolderFileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaDropFolderFileOrderBy',KalturaDropFolderFileOrderBy);