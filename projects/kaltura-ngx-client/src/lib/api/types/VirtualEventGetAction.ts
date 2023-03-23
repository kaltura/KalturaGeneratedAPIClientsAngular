
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirtualEvent } from './KalturaVirtualEvent';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VirtualEventGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'virtualEvent' action 'get'.
 *
 * Usage: Retrieve a virtual event by id
 *
 * Server response type:         KalturaVirtualEvent
 * Server failure response type: KalturaAPIException
 */
export class VirtualEventGetAction extends KalturaRequest<KalturaVirtualEvent> {

    id : number;

    constructor(data : VirtualEventGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaVirtualEvent', responseConstructor : KalturaVirtualEvent  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'virtualevent_virtualevent' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

