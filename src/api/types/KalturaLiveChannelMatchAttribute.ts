

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveChannelMatchAttribute extends KalturaObjectBase {
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

    static adminTags = new KalturaLiveChannelMatchAttribute('adminTags');
	static categoriesIds = new KalturaLiveChannelMatchAttribute('categoriesIds');
	static creatorId = new KalturaLiveChannelMatchAttribute('creatorId');
	static description = new KalturaLiveChannelMatchAttribute('description');
	static durationType = new KalturaLiveChannelMatchAttribute('durationType');
	static flavorParamsIds = new KalturaLiveChannelMatchAttribute('flavorParamsIds');
	static groupId = new KalturaLiveChannelMatchAttribute('groupId');
	static id = new KalturaLiveChannelMatchAttribute('id');
	static _name = new KalturaLiveChannelMatchAttribute('name');
	static referenceId = new KalturaLiveChannelMatchAttribute('referenceId');
	static replacedEntryId = new KalturaLiveChannelMatchAttribute('replacedEntryId');
	static replacingEntryId = new KalturaLiveChannelMatchAttribute('replacingEntryId');
	static searchText = new KalturaLiveChannelMatchAttribute('searchText');
	static tags = new KalturaLiveChannelMatchAttribute('tags');
	static userId = new KalturaLiveChannelMatchAttribute('userId');
}
KalturaTypesFactory.registerType('KalturaLiveChannelMatchAttribute',KalturaLiveChannelMatchAttribute);