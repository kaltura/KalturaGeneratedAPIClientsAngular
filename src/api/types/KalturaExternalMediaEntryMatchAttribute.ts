

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaExternalMediaEntryMatchAttribute extends KalturaObjectBase {
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

    static adminTags = new KalturaExternalMediaEntryMatchAttribute('adminTags');
	static categoriesIds = new KalturaExternalMediaEntryMatchAttribute('categoriesIds');
	static creatorId = new KalturaExternalMediaEntryMatchAttribute('creatorId');
	static description = new KalturaExternalMediaEntryMatchAttribute('description');
	static durationType = new KalturaExternalMediaEntryMatchAttribute('durationType');
	static flavorParamsIds = new KalturaExternalMediaEntryMatchAttribute('flavorParamsIds');
	static groupId = new KalturaExternalMediaEntryMatchAttribute('groupId');
	static id = new KalturaExternalMediaEntryMatchAttribute('id');
	static _name = new KalturaExternalMediaEntryMatchAttribute('name');
	static referenceId = new KalturaExternalMediaEntryMatchAttribute('referenceId');
	static replacedEntryId = new KalturaExternalMediaEntryMatchAttribute('replacedEntryId');
	static replacingEntryId = new KalturaExternalMediaEntryMatchAttribute('replacingEntryId');
	static searchText = new KalturaExternalMediaEntryMatchAttribute('searchText');
	static tags = new KalturaExternalMediaEntryMatchAttribute('tags');
	static userId = new KalturaExternalMediaEntryMatchAttribute('userId');
}
KalturaTypesFactory.registerType('KalturaExternalMediaEntryMatchAttribute',KalturaExternalMediaEntryMatchAttribute);