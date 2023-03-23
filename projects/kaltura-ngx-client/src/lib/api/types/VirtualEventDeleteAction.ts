
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VirtualEventDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'virtualEvent' action 'delete'.
 *
 * Usage: Delete a virtual event
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class VirtualEventDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : VirtualEventDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'virtualevent_virtualevent' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

