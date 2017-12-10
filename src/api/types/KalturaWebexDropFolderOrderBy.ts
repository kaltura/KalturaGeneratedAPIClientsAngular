

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaWebexDropFolderOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaWebexDropFolderOrderBy('+createdAt');
	static createdAtDesc = new KalturaWebexDropFolderOrderBy('-createdAt');
	static idAsc = new KalturaWebexDropFolderOrderBy('+id');
	static idDesc = new KalturaWebexDropFolderOrderBy('-id');
	static nameAsc = new KalturaWebexDropFolderOrderBy('+name');
	static nameDesc = new KalturaWebexDropFolderOrderBy('-name');
	static updatedAtAsc = new KalturaWebexDropFolderOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaWebexDropFolderOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaWebexDropFolderOrderBy',KalturaWebexDropFolderOrderBy);