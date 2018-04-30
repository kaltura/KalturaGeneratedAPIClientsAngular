
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryServerNode } from './KalturaEntryServerNode';

import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryServerNodeUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : string;
	status : KalturaEntryServerNodeStatus;
}

/**
 * Build request payload for service 'entryServerNode' action 'updateStatus'.
 *
 * 
 *
 * Server response type:         KalturaEntryServerNode
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntryServerNodeUpdateStatusAction extends KalturaRequest<KalturaEntryServerNode> {

    id : string;
	status : KalturaEntryServerNodeStatus;

    constructor(data : EntryServerNodeUpdateStatusActionArgs)
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
				action : { type : 'c', default : 'updateStatus' },
				id : { type : 's' },
				status : { type : 'en', subTypeConstructor : KalturaEntryServerNodeStatus, subType : 'KalturaEntryServerNodeStatus' }
            }
        );
        return result;
    }
}

