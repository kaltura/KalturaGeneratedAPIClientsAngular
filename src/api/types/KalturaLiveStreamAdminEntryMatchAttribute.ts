

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveStreamAdminEntryMatchAttribute extends KalturaObjectBase {
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

    static adminTags = new KalturaLiveStreamAdminEntryMatchAttribute('adminTags');
	static categoriesIds = new KalturaLiveStreamAdminEntryMatchAttribute('categoriesIds');
	static creatorId = new KalturaLiveStreamAdminEntryMatchAttribute('creatorId');
	static description = new KalturaLiveStreamAdminEntryMatchAttribute('description');
	static durationType = new KalturaLiveStreamAdminEntryMatchAttribute('durationType');
	static flavorParamsIds = new KalturaLiveStreamAdminEntryMatchAttribute('flavorParamsIds');
	static groupId = new KalturaLiveStreamAdminEntryMatchAttribute('groupId');
	static id = new KalturaLiveStreamAdminEntryMatchAttribute('id');
	static _name = new KalturaLiveStreamAdminEntryMatchAttribute('name');
	static referenceId = new KalturaLiveStreamAdminEntryMatchAttribute('referenceId');
	static replacedEntryId = new KalturaLiveStreamAdminEntryMatchAttribute('replacedEntryId');
	static replacingEntryId = new KalturaLiveStreamAdminEntryMatchAttribute('replacingEntryId');
	static searchText = new KalturaLiveStreamAdminEntryMatchAttribute('searchText');
	static tags = new KalturaLiveStreamAdminEntryMatchAttribute('tags');
	static userId = new KalturaLiveStreamAdminEntryMatchAttribute('userId');
}
KalturaTypesFactory.registerType('KalturaLiveStreamAdminEntryMatchAttribute',KalturaLiveStreamAdminEntryMatchAttribute);