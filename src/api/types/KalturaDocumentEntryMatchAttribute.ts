

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDocumentEntryMatchAttribute extends KalturaObjectBase {
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

    static adminTags = new KalturaDocumentEntryMatchAttribute('adminTags');
	static categoriesIds = new KalturaDocumentEntryMatchAttribute('categoriesIds');
	static creatorId = new KalturaDocumentEntryMatchAttribute('creatorId');
	static description = new KalturaDocumentEntryMatchAttribute('description');
	static groupId = new KalturaDocumentEntryMatchAttribute('groupId');
	static id = new KalturaDocumentEntryMatchAttribute('id');
	static _name = new KalturaDocumentEntryMatchAttribute('name');
	static referenceId = new KalturaDocumentEntryMatchAttribute('referenceId');
	static replacedEntryId = new KalturaDocumentEntryMatchAttribute('replacedEntryId');
	static replacingEntryId = new KalturaDocumentEntryMatchAttribute('replacingEntryId');
	static searchText = new KalturaDocumentEntryMatchAttribute('searchText');
	static tags = new KalturaDocumentEntryMatchAttribute('tags');
	static userId = new KalturaDocumentEntryMatchAttribute('userId');
}
KalturaTypesFactory.registerType('KalturaDocumentEntryMatchAttribute',KalturaDocumentEntryMatchAttribute);