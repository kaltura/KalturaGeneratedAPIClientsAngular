
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrailListResponse } from './KalturaAuditTrailListResponse';

import { KalturaAuditTrailFilter } from './KalturaAuditTrailFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AuditTrailListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAuditTrailFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'auditTrail' action 'list'.
 *
 * Usage: List audit trail objects by filter and pager
 *
 * Server response type:         KalturaAuditTrailListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AuditTrailListAction extends KalturaRequest<KalturaAuditTrailListResponse> {

    filter : KalturaAuditTrailFilter;
	pager : KalturaFilterPager;

    constructor(data? : AuditTrailListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAuditTrailListResponse', responseConstructor : KalturaAuditTrailListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'audit_audittrail' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaAuditTrailFilter, subType : 'KalturaAuditTrailFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

