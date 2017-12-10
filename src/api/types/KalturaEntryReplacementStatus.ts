

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEntryReplacementStatus extends KalturaObjectBase {
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

    static approvedButNotReady = new KalturaEntryReplacementStatus('1');
	static failed = new KalturaEntryReplacementStatus('4');
	static none = new KalturaEntryReplacementStatus('0');
	static notReadyAndNotApproved = new KalturaEntryReplacementStatus('3');
	static readyButNotApproved = new KalturaEntryReplacementStatus('2');
}
KalturaTypesFactory.registerType('KalturaEntryReplacementStatus',KalturaEntryReplacementStatus);