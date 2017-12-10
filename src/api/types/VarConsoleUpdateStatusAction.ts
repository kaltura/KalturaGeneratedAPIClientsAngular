
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaPartnerStatus } from './KalturaPartnerStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VarConsoleUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : number;
	status : KalturaPartnerStatus;
}

/**
 * Build request payload for service 'varConsole' action 'updateStatus'.
 *
 * Usage: Function to change a sub-publisher's status
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class VarConsoleUpdateStatusAction extends KalturaRequest<void> {

    id : number;
	status : KalturaPartnerStatus;

    constructor(data : VarConsoleUpdateStatusActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'varconsole_varconsole' },
				action : { type : 'c', default : 'updateStatus' },
				id : { type : 'n' },
				status : { type : 'en', subTypeConstructor : KalturaPartnerStatus, subType : 'KalturaPartnerStatus' }
            }
        );
        return result;
    }
}

