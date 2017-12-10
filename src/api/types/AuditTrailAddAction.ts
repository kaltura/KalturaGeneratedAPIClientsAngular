
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrail } from './KalturaAuditTrail';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AuditTrailAddActionArgs  extends KalturaRequestArgs {
    auditTrail : KalturaAuditTrail;
}

/**
 * Build request payload for service 'auditTrail' action 'add'.
 *
 * Usage: Allows you to add an audit trail object and audit trail content associated with Kaltura object
 *
 * Server response type:         KalturaAuditTrail
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AuditTrailAddAction extends KalturaRequest<KalturaAuditTrail> {

    auditTrail : KalturaAuditTrail;

    constructor(data : AuditTrailAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				auditTrail : { type : 'o', subTypeConstructor : KalturaAuditTrail, subType : 'KalturaAuditTrail' }
            }
        );
        return result;
    }
}

