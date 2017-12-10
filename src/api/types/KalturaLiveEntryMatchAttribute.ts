

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveEntryMatchAttribute extends KalturaObjectBase {
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

    static adminTags = new KalturaLiveEntryMatchAttribute('adminTags');
	static categoriesIds = new KalturaLiveEntryMatchAttribute('categoriesIds');
	static creatorId = new KalturaLiveEntryMatchAttribute('creatorId');
	static description = new KalturaLiveEntryMatchAttribute('description');
	static durationType = new KalturaLiveEntryMatchAttribute('durationType');
	static flavorParamsIds = new KalturaLiveEntryMatchAttribute('flavorParamsIds');
	static groupId = new KalturaLiveEntryMatchAttribute('groupId');
	static id = new KalturaLiveEntryMatchAttribute('id');
	static _name = new KalturaLiveEntryMatchAttribute('name');
	static referenceId = new KalturaLiveEntryMatchAttribute('referenceId');
	static replacedEntryId = new KalturaLiveEntryMatchAttribute('replacedEntryId');
	static replacingEntryId = new KalturaLiveEntryMatchAttribute('replacingEntryId');
	static searchText = new KalturaLiveEntryMatchAttribute('searchText');
	static tags = new KalturaLiveEntryMatchAttribute('tags');
	static userId = new KalturaLiveEntryMatchAttribute('userId');
}
KalturaTypesFactory.registerType('KalturaLiveEntryMatchAttribute',KalturaLiveEntryMatchAttribute);