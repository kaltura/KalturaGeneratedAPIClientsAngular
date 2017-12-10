

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAuditTrailAction extends KalturaObjectBase {
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

    static changed = new KalturaAuditTrailAction('CHANGED');
	static contentViewed = new KalturaAuditTrailAction('CONTENT_VIEWED');
	static copied = new KalturaAuditTrailAction('COPIED');
	static created = new KalturaAuditTrailAction('CREATED');
	static deleted = new KalturaAuditTrailAction('DELETED');
	static fileSyncCreated = new KalturaAuditTrailAction('FILE_SYNC_CREATED');
	static relationAdded = new KalturaAuditTrailAction('RELATION_ADDED');
	static relationRemoved = new KalturaAuditTrailAction('RELATION_REMOVED');
	static viewed = new KalturaAuditTrailAction('VIEWED');
}
KalturaTypesFactory.registerType('KalturaAuditTrailAction',KalturaAuditTrailAction);