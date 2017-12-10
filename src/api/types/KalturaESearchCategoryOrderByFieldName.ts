

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaESearchCategoryOrderByFieldName extends KalturaObjectBase {
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

    static categoryCreatedAt = new KalturaESearchCategoryOrderByFieldName('created_at');
	static categoryUpdatedAt = new KalturaESearchCategoryOrderByFieldName('updated_at');
}
KalturaTypesFactory.registerType('KalturaESearchCategoryOrderByFieldName',KalturaESearchCategoryOrderByFieldName);