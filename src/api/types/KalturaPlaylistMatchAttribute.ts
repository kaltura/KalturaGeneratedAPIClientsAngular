

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPlaylistMatchAttribute extends KalturaObjectBase {
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

    static adminTags = new KalturaPlaylistMatchAttribute('adminTags');
	static categoriesIds = new KalturaPlaylistMatchAttribute('categoriesIds');
	static creatorId = new KalturaPlaylistMatchAttribute('creatorId');
	static description = new KalturaPlaylistMatchAttribute('description');
	static groupId = new KalturaPlaylistMatchAttribute('groupId');
	static id = new KalturaPlaylistMatchAttribute('id');
	static _name = new KalturaPlaylistMatchAttribute('name');
	static referenceId = new KalturaPlaylistMatchAttribute('referenceId');
	static replacedEntryId = new KalturaPlaylistMatchAttribute('replacedEntryId');
	static replacingEntryId = new KalturaPlaylistMatchAttribute('replacingEntryId');
	static searchText = new KalturaPlaylistMatchAttribute('searchText');
	static tags = new KalturaPlaylistMatchAttribute('tags');
	static userId = new KalturaPlaylistMatchAttribute('userId');
}
KalturaTypesFactory.registerType('KalturaPlaylistMatchAttribute',KalturaPlaylistMatchAttribute);