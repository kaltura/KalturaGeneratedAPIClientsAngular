

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveStreamEntryMatchAttribute extends KalturaObjectBase {
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

    static adminTags = new KalturaLiveStreamEntryMatchAttribute('adminTags');
	static categoriesIds = new KalturaLiveStreamEntryMatchAttribute('categoriesIds');
	static creatorId = new KalturaLiveStreamEntryMatchAttribute('creatorId');
	static description = new KalturaLiveStreamEntryMatchAttribute('description');
	static durationType = new KalturaLiveStreamEntryMatchAttribute('durationType');
	static flavorParamsIds = new KalturaLiveStreamEntryMatchAttribute('flavorParamsIds');
	static groupId = new KalturaLiveStreamEntryMatchAttribute('groupId');
	static id = new KalturaLiveStreamEntryMatchAttribute('id');
	static _name = new KalturaLiveStreamEntryMatchAttribute('name');
	static referenceId = new KalturaLiveStreamEntryMatchAttribute('referenceId');
	static replacedEntryId = new KalturaLiveStreamEntryMatchAttribute('replacedEntryId');
	static replacingEntryId = new KalturaLiveStreamEntryMatchAttribute('replacingEntryId');
	static searchText = new KalturaLiveStreamEntryMatchAttribute('searchText');
	static tags = new KalturaLiveStreamEntryMatchAttribute('tags');
	static userId = new KalturaLiveStreamEntryMatchAttribute('userId');
}
KalturaTypesFactory.registerType('KalturaLiveStreamEntryMatchAttribute',KalturaLiveStreamEntryMatchAttribute);