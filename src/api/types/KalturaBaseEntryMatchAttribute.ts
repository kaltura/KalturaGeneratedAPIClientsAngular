

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBaseEntryMatchAttribute extends KalturaObjectBase {
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

    static adminTags = new KalturaBaseEntryMatchAttribute('adminTags');
	static categoriesIds = new KalturaBaseEntryMatchAttribute('categoriesIds');
	static creatorId = new KalturaBaseEntryMatchAttribute('creatorId');
	static description = new KalturaBaseEntryMatchAttribute('description');
	static groupId = new KalturaBaseEntryMatchAttribute('groupId');
	static id = new KalturaBaseEntryMatchAttribute('id');
	static _name = new KalturaBaseEntryMatchAttribute('name');
	static referenceId = new KalturaBaseEntryMatchAttribute('referenceId');
	static replacedEntryId = new KalturaBaseEntryMatchAttribute('replacedEntryId');
	static replacingEntryId = new KalturaBaseEntryMatchAttribute('replacingEntryId');
	static searchText = new KalturaBaseEntryMatchAttribute('searchText');
	static tags = new KalturaBaseEntryMatchAttribute('tags');
	static userId = new KalturaBaseEntryMatchAttribute('userId');
}
KalturaTypesFactory.registerType('KalturaBaseEntryMatchAttribute',KalturaBaseEntryMatchAttribute);