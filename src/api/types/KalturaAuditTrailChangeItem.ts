
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAuditTrailChangeItemArgs  extends KalturaObjectBaseArgs {
    descriptor? : string;
	oldValue? : string;
	newValue? : string;
}


export class KalturaAuditTrailChangeItem extends KalturaObjectBase {

    descriptor : string;
	oldValue : string;
	newValue : string;

    constructor(data? : KalturaAuditTrailChangeItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAuditTrailChangeItem' },
				descriptor : { type : 's' },
				oldValue : { type : 's' },
				newValue : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAuditTrailChangeItem',KalturaAuditTrailChangeItem);
