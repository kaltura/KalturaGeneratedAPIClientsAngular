

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaFtpDropFolderOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaFtpDropFolderOrderBy('+createdAt');
	static createdAtDesc = new KalturaFtpDropFolderOrderBy('-createdAt');
	static idAsc = new KalturaFtpDropFolderOrderBy('+id');
	static idDesc = new KalturaFtpDropFolderOrderBy('-id');
	static nameAsc = new KalturaFtpDropFolderOrderBy('+name');
	static nameDesc = new KalturaFtpDropFolderOrderBy('-name');
	static updatedAtAsc = new KalturaFtpDropFolderOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaFtpDropFolderOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaFtpDropFolderOrderBy',KalturaFtpDropFolderOrderBy);