
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAuditTrail } from './KalturaAuditTrail';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAuditTrailListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaAuditTrailListResponse extends KalturaListResponse {

    readonly objects : KalturaAuditTrail[];

    constructor(data? : KalturaAuditTrailListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAuditTrailListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaAuditTrail, subType : 'KalturaAuditTrail' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAuditTrailListResponse',KalturaAuditTrailListResponse);
