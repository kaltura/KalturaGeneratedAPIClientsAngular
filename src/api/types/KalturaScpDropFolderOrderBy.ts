

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaScpDropFolderOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaScpDropFolderOrderBy('+createdAt');
	static createdAtDesc = new KalturaScpDropFolderOrderBy('-createdAt');
	static idAsc = new KalturaScpDropFolderOrderBy('+id');
	static idDesc = new KalturaScpDropFolderOrderBy('-id');
	static nameAsc = new KalturaScpDropFolderOrderBy('+name');
	static nameDesc = new KalturaScpDropFolderOrderBy('-name');
	static updatedAtAsc = new KalturaScpDropFolderOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaScpDropFolderOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaScpDropFolderOrderBy',KalturaScpDropFolderOrderBy);