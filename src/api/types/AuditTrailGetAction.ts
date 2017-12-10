
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrail } from './KalturaAuditTrail';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AuditTrailGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'auditTrail' action 'get'.
 *
 * Usage: Retrieve an audit trail object by id
 *
 * Server response type:         KalturaAuditTrail
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AuditTrailGetAction extends KalturaRequest<KalturaAuditTrail> {

    id : number;

    constructor(data : AuditTrailGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAuditTrail', responseConstructor : KalturaAuditTrail  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'audit_audittrail' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

