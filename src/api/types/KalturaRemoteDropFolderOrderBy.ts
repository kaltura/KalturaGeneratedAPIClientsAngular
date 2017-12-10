

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaRemoteDropFolderOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaRemoteDropFolderOrderBy('+createdAt');
	static createdAtDesc = new KalturaRemoteDropFolderOrderBy('-createdAt');
	static idAsc = new KalturaRemoteDropFolderOrderBy('+id');
	static idDesc = new KalturaRemoteDropFolderOrderBy('-id');
	static nameAsc = new KalturaRemoteDropFolderOrderBy('+name');
	static nameDesc = new KalturaRemoteDropFolderOrderBy('-name');
	static updatedAtAsc = new KalturaRemoteDropFolderOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaRemoteDropFolderOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaRemoteDropFolderOrderBy',KalturaRemoteDropFolderOrderBy);