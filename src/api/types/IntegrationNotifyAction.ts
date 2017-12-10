
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IntegrationNotifyActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'integration' action 'notify'.
 *
 * 
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IntegrationNotifyAction extends KalturaRequest<void> {

    id : number;

    constructor(data : IntegrationNotifyActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'integration_integration' },
				action : { type : 'c', default : 'notify' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

