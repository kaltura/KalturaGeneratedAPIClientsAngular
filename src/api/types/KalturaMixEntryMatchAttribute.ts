

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMixEntryMatchAttribute extends KalturaObjectBase {
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

    static adminTags = new KalturaMixEntryMatchAttribute('adminTags');
	static categoriesIds = new KalturaMixEntryMatchAttribute('categoriesIds');
	static creatorId = new KalturaMixEntryMatchAttribute('creatorId');
	static description = new KalturaMixEntryMatchAttribute('description');
	static durationType = new KalturaMixEntryMatchAttribute('durationType');
	static groupId = new KalturaMixEntryMatchAttribute('groupId');
	static id = new KalturaMixEntryMatchAttribute('id');
	static _name = new KalturaMixEntryMatchAttribute('name');
	static referenceId = new KalturaMixEntryMatchAttribute('referenceId');
	static replacedEntryId = new KalturaMixEntryMatchAttribute('replacedEntryId');
	static replacingEntryId = new KalturaMixEntryMatchAttribute('replacingEntryId');
	static searchText = new KalturaMixEntryMatchAttribute('searchText');
	static tags = new KalturaMixEntryMatchAttribute('tags');
	static userId = new KalturaMixEntryMatchAttribute('userId');
}
KalturaTypesFactory.registerType('KalturaMixEntryMatchAttribute',KalturaMixEntryMatchAttribute);