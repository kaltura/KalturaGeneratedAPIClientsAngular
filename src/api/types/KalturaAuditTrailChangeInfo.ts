
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAuditTrailChangeItem } from './KalturaAuditTrailChangeItem';
import { KalturaAuditTrailInfo, KalturaAuditTrailInfoArgs } from './KalturaAuditTrailInfo';

export interface KalturaAuditTrailChangeInfoArgs  extends KalturaAuditTrailInfoArgs {
    changedItems? : KalturaAuditTrailChangeItem[];
}


export class KalturaAuditTrailChangeInfo extends KalturaAuditTrailInfo {

    changedItems : KalturaAuditTrailChangeItem[];

    constructor(data? : KalturaAuditTrailChangeInfoArgs)
    {
        super(data);
        if (typeof this.changedItems === 'undefined') this.changedItems = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAuditTrailChangeInfo' },
				changedItems : { type : 'a', subTypeConstructor : KalturaAuditTrailChangeItem, subType : 'KalturaAuditTrailChangeItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAuditTrailChangeInfo',KalturaAuditTrailChangeInfo);
