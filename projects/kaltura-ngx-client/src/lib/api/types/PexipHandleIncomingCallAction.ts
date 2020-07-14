
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PexipHandleIncomingCallActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'pexip' action 'handleIncomingCall'.
 *
 * 
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class PexipHandleIncomingCallAction extends KalturaRequest<void> {

    

    constructor(data? : PexipHandleIncomingCallActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'sip_pexip' },
				action : { type : 'c', default : 'handleIncomingCall' }
            }
        );
        return result;
    }
}

