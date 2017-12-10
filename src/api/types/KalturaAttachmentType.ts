

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAttachmentType extends KalturaObjectBase {
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

    static document = new KalturaAttachmentType('3');
	static json = new KalturaAttachmentType('4');
	static media = new KalturaAttachmentType('2');
	static text = new KalturaAttachmentType('1');
}
KalturaTypesFactory.registerType('KalturaAttachmentType',KalturaAttachmentType);