

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDataEntryMatchAttribute extends KalturaObjectBase {
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

    static adminTags = new KalturaDataEntryMatchAttribute('adminTags');
	static categoriesIds = new KalturaDataEntryMatchAttribute('categoriesIds');
	static creatorId = new KalturaDataEntryMatchAttribute('creatorId');
	static description = new KalturaDataEntryMatchAttribute('description');
	static groupId = new KalturaDataEntryMatchAttribute('groupId');
	static id = new KalturaDataEntryMatchAttribute('id');
	static _name = new KalturaDataEntryMatchAttribute('name');
	static referenceId = new KalturaDataEntryMatchAttribute('referenceId');
	static replacedEntryId = new KalturaDataEntryMatchAttribute('replacedEntryId');
	static replacingEntryId = new KalturaDataEntryMatchAttribute('replacingEntryId');
	static searchText = new KalturaDataEntryMatchAttribute('searchText');
	static tags = new KalturaDataEntryMatchAttribute('tags');
	static userId = new KalturaDataEntryMatchAttribute('userId');
}
KalturaTypesFactory.registerType('KalturaDataEntryMatchAttribute',KalturaDataEntryMatchAttribute);