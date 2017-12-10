

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaSftpDropFolderOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaSftpDropFolderOrderBy('+createdAt');
	static createdAtDesc = new KalturaSftpDropFolderOrderBy('-createdAt');
	static idAsc = new KalturaSftpDropFolderOrderBy('+id');
	static idDesc = new KalturaSftpDropFolderOrderBy('-id');
	static nameAsc = new KalturaSftpDropFolderOrderBy('+name');
	static nameDesc = new KalturaSftpDropFolderOrderBy('-name');
	static updatedAtAsc = new KalturaSftpDropFolderOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaSftpDropFolderOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaSftpDropFolderOrderBy',KalturaSftpDropFolderOrderBy);