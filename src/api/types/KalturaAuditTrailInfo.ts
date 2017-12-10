
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAuditTrailInfoArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaAuditTrailInfo extends KalturaObjectBase {

    

    constructor(data? : KalturaAuditTrailInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAuditTrailInfo' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAuditTrailInfo',KalturaAuditTrailInfo);
