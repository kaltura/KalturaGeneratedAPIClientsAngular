
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PollAddActionArgs  extends KalturaRequestArgs {
    pollType? : string;
}

/**
 * Build request payload for service 'poll' action 'add'.
 *
 * Usage: Add Action
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PollAddAction extends KalturaRequest<string> {

    pollType : string;

    constructor(data? : PollAddActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
        if (typeof this.pollType === 'undefined') this.pollType = "SINGLE_ANONYMOUS";
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'poll_poll' },
				action : { type : 'c', default : 'add' },
				pollType : { type : 's' }
            }
        );
        return result;
    }
}

