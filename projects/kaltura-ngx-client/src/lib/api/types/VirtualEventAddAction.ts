
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirtualEvent } from './KalturaVirtualEvent';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VirtualEventAddActionArgs  extends KalturaRequestArgs {
    virtualEvent : KalturaVirtualEvent;
}

/**
 * Build request payload for service 'virtualEvent' action 'add'.
 *
 * Usage: Add a new virtual event
 *
 * Server response type:         KalturaVirtualEvent
 * Server failure response type: KalturaAPIException
 */
export class VirtualEventAddAction extends KalturaRequest<KalturaVirtualEvent> {

    virtualEvent : KalturaVirtualEvent;

    constructor(data : VirtualEventAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				virtualEvent : { type : 'o', subTypeConstructor : KalturaVirtualEvent, subType : 'KalturaVirtualEvent' }
            }
        );
        return result;
    }
}

