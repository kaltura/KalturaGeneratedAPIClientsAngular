
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAuditTrailFileSyncType } from './KalturaAuditTrailFileSyncType';
import { KalturaAuditTrailInfo, KalturaAuditTrailInfoArgs } from './KalturaAuditTrailInfo';

export interface KalturaAuditTrailFileSyncCreateInfoArgs  extends KalturaAuditTrailInfoArgs {
    version? : string;
	objectSubType? : number;
	dc? : number;
	original? : boolean;
	fileType? : KalturaAuditTrailFileSyncType;
}


export class KalturaAuditTrailFileSyncCreateInfo extends KalturaAuditTrailInfo {

    version : string;
	objectSubType : number;
	dc : number;
	original : boolean;
	fileType : KalturaAuditTrailFileSyncType;

    constructor(data? : KalturaAuditTrailFileSyncCreateInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAuditTrailFileSyncCreateInfo' },
				version : { type : 's' },
				objectSubType : { type : 'n' },
				dc : { type : 'n' },
				original : { type : 'b' },
				fileType : { type : 'en', subTypeConstructor : KalturaAuditTrailFileSyncType, subType : 'KalturaAuditTrailFileSyncType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAuditTrailFileSyncCreateInfo',KalturaAuditTrailFileSyncCreateInfo);
