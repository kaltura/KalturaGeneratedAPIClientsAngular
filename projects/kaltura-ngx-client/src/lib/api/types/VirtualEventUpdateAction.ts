
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirtualEvent } from './KalturaVirtualEvent';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VirtualEventUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	virtualEvent : KalturaVirtualEvent;
}

/**
 * Build request payload for service 'virtualEvent' action 'update'.
 *
 * Usage: Update an existing virtual event
 *
 * Server response type:         KalturaVirtualEvent
 * Server failure response type: KalturaAPIException
 */
export class VirtualEventUpdateAction extends KalturaRequest<KalturaVirtualEvent> {

    id : number;
	virtualEvent : KalturaVirtualEvent;

    constructor(data : VirtualEventUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				virtualEvent : { type : 'o', subTypeConstructor : KalturaVirtualEvent, subType : 'KalturaVirtualEvent' }
            }
        );
        return result;
    }
}

