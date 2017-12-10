
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryServerNode } from './KalturaEntryServerNode';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryServerNodeUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	entryServerNode : KalturaEntryServerNode;
}

/**
 * Build request payload for service 'entryServerNode' action 'update'.
 *
 * 
 *
 * Server response type:         KalturaEntryServerNode
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntryServerNodeUpdateAction extends KalturaRequest<KalturaEntryServerNode> {

    id : number;
	entryServerNode : KalturaEntryServerNode;

    constructor(data : EntryServerNodeUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				entryServerNode : { type : 'o', subTypeConstructor : KalturaEntryServerNode, subType : 'KalturaEntryServerNode' }
            }
        );
        return result;
    }
}

