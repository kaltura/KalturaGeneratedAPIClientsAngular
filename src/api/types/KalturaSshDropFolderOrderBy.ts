

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaSshDropFolderOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaSshDropFolderOrderBy('+createdAt');
	static createdAtDesc = new KalturaSshDropFolderOrderBy('-createdAt');
	static idAsc = new KalturaSshDropFolderOrderBy('+id');
	static idDesc = new KalturaSshDropFolderOrderBy('-id');
	static nameAsc = new KalturaSshDropFolderOrderBy('+name');
	static nameDesc = new KalturaSshDropFolderOrderBy('-name');
	static updatedAtAsc = new KalturaSshDropFolderOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaSshDropFolderOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaSshDropFolderOrderBy',KalturaSshDropFolderOrderBy);