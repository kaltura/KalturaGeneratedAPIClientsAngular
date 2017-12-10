

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPlayableEntryMatchAttribute extends KalturaObjectBase {
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

    static adminTags = new KalturaPlayableEntryMatchAttribute('adminTags');
	static categoriesIds = new KalturaPlayableEntryMatchAttribute('categoriesIds');
	static creatorId = new KalturaPlayableEntryMatchAttribute('creatorId');
	static description = new KalturaPlayableEntryMatchAttribute('description');
	static durationType = new KalturaPlayableEntryMatchAttribute('durationType');
	static groupId = new KalturaPlayableEntryMatchAttribute('groupId');
	static id = new KalturaPlayableEntryMatchAttribute('id');
	static _name = new KalturaPlayableEntryMatchAttribute('name');
	static referenceId = new KalturaPlayableEntryMatchAttribute('referenceId');
	static replacedEntryId = new KalturaPlayableEntryMatchAttribute('replacedEntryId');
	static replacingEntryId = new KalturaPlayableEntryMatchAttribute('replacingEntryId');
	static searchText = new KalturaPlayableEntryMatchAttribute('searchText');
	static tags = new KalturaPlayableEntryMatchAttribute('tags');
	static userId = new KalturaPlayableEntryMatchAttribute('userId');
}
KalturaTypesFactory.registerType('KalturaPlayableEntryMatchAttribute',KalturaPlayableEntryMatchAttribute);