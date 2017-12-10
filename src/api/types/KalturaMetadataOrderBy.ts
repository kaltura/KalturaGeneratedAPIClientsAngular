

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMetadataOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaMetadataOrderBy('+createdAt');
	static createdAtDesc = new KalturaMetadataOrderBy('-createdAt');
	static metadataProfileVersionAsc = new KalturaMetadataOrderBy('+metadataProfileVersion');
	static metadataProfileVersionDesc = new KalturaMetadataOrderBy('-metadataProfileVersion');
	static updatedAtAsc = new KalturaMetadataOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaMetadataOrderBy('-updatedAt');
	static versionAsc = new KalturaMetadataOrderBy('+version');
	static versionDesc = new KalturaMetadataOrderBy('-version');
}
KalturaTypesFactory.registerType('KalturaMetadataOrderBy',KalturaMetadataOrderBy);