
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SystemPingActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'system' action 'ping'.
 *
 * 
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SystemPingAction extends KalturaRequest<boolean> {

    

    constructor(data? : SystemPingActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'system' },
				action : { type : 'c', default : 'ping' }
            }
        );
        return result;
    }
}

