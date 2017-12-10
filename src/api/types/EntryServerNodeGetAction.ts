
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryServerNode } from './KalturaEntryServerNode';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryServerNodeGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'entryServerNode' action 'get'.
 *
 * 
 *
 * Server response type:         KalturaEntryServerNode
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntryServerNodeGetAction extends KalturaRequest<KalturaEntryServerNode> {

    id : string;

    constructor(data : EntryServerNodeGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEntryServerNode', responseConstructor : KalturaEntryServerNode  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'entryservernode' },
				action : { type : 'c', default : 'get' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

