

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMediaEntryMatchAttribute extends KalturaObjectBase {
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

    static adminTags = new KalturaMediaEntryMatchAttribute('adminTags');
	static categoriesIds = new KalturaMediaEntryMatchAttribute('categoriesIds');
	static creatorId = new KalturaMediaEntryMatchAttribute('creatorId');
	static description = new KalturaMediaEntryMatchAttribute('description');
	static durationType = new KalturaMediaEntryMatchAttribute('durationType');
	static flavorParamsIds = new KalturaMediaEntryMatchAttribute('flavorParamsIds');
	static groupId = new KalturaMediaEntryMatchAttribute('groupId');
	static id = new KalturaMediaEntryMatchAttribute('id');
	static _name = new KalturaMediaEntryMatchAttribute('name');
	static referenceId = new KalturaMediaEntryMatchAttribute('referenceId');
	static replacedEntryId = new KalturaMediaEntryMatchAttribute('replacedEntryId');
	static replacingEntryId = new KalturaMediaEntryMatchAttribute('replacingEntryId');
	static searchText = new KalturaMediaEntryMatchAttribute('searchText');
	static tags = new KalturaMediaEntryMatchAttribute('tags');
	static userId = new KalturaMediaEntryMatchAttribute('userId');
}
KalturaTypesFactory.registerType('KalturaMediaEntryMatchAttribute',KalturaMediaEntryMatchAttribute);