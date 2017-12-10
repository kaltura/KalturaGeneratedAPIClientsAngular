
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryServerNodeValidateRegisteredEntryServerNodeActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'entryServerNode' action 'validateRegisteredEntryServerNode'.
 *
 * Usage: Validates server node still registered on entry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntryServerNodeValidateRegisteredEntryServerNodeAction extends KalturaRequest<void> {

    id : number;

    constructor(data : EntryServerNodeValidateRegisteredEntryServerNodeActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'entryservernode' },
				action : { type : 'c', default : 'validateRegisteredEntryServerNode' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

