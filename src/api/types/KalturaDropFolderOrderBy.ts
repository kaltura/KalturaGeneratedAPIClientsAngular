

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDropFolderOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDropFolderOrderBy('+createdAt');
	static createdAtDesc = new KalturaDropFolderOrderBy('-createdAt');
	static idAsc = new KalturaDropFolderOrderBy('+id');
	static idDesc = new KalturaDropFolderOrderBy('-id');
	static nameAsc = new KalturaDropFolderOrderBy('+name');
	static nameDesc = new KalturaDropFolderOrderBy('-name');
	static updatedAtAsc = new KalturaDropFolderOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDropFolderOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaDropFolderOrderBy',KalturaDropFolderOrderBy);