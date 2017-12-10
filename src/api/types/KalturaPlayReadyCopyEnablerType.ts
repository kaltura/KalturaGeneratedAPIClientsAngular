

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPlayReadyCopyEnablerType extends KalturaObjectBase {
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

    static aacs = new KalturaPlayReadyCopyEnablerType('C3CF56E0-7FF2-4491-809F-53E21D3ABF07');
	static clipboard = new KalturaPlayReadyCopyEnablerType('6E76C588-C3A9-47ea-A875-546D5209FF38');
	static cprm = new KalturaPlayReadyCopyEnablerType('CDD801AD-A577-48DB-950E-46D5F1592FAE');
	static css = new KalturaPlayReadyCopyEnablerType('3CAF2814-A7AB-467C-B4DF-54ACC56C66DC');
	static device = new KalturaPlayReadyCopyEnablerType('6848955D-516B-4EB0-90E8-8F6D5A77B85F');
	static helix = new KalturaPlayReadyCopyEnablerType('CCB0B4E3-8B46-409e-A998-82556E3F5AF4');
	static orangeBookCd = new KalturaPlayReadyCopyEnablerType('EC930B7D-1F2D-4682-A38B-8AB977721D0D');
	static pc = new KalturaPlayReadyCopyEnablerType('CE480EDE-516B-40B3-90E1-D6CFC47630C5');
	static printer = new KalturaPlayReadyCopyEnablerType('3CF2E054-F4D5-46cd-85A6-FCD152AD5FBE');
	static sdc = new KalturaPlayReadyCopyEnablerType('79F78A0D-0B69-401e-8A90-8BEF30BCE192');
	static sdcLimited = new KalturaPlayReadyCopyEnablerType('E6785609-64CC-4bfa-B82D-6B619733B746');
	static sdcPreview = new KalturaPlayReadyCopyEnablerType('81BD9AD4-A720-4ea1-B510-5D4E6FFB6A4D');
}
KalturaTypesFactory.registerType('KalturaPlayReadyCopyEnablerType',KalturaPlayReadyCopyEnablerType);