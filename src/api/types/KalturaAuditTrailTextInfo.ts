
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAuditTrailInfo, KalturaAuditTrailInfoArgs } from './KalturaAuditTrailInfo';

export interface KalturaAuditTrailTextInfoArgs  extends KalturaAuditTrailInfoArgs {
    info? : string;
}


export class KalturaAuditTrailTextInfo extends KalturaAuditTrailInfo {

    info : string;

    constructor(data? : KalturaAuditTrailTextInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAuditTrailTextInfo' },
				info : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAuditTrailTextInfo',KalturaAuditTrailTextInfo);
