
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelValidateRegisteredMediaServersActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'liveChannel' action 'validateRegisteredMediaServers'.
 *
 * Usage: Validates all registered media servers
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveChannelValidateRegisteredMediaServersAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : LiveChannelValidateRegisteredMediaServersActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livechannel' },
				action : { type : 'c', default : 'validateRegisteredMediaServers' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

