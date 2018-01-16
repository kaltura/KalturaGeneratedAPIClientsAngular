
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ServerNodeMarkOfflineActionArgs  extends KalturaRequestArgs {
    serverNodeId : string;
}

/**
 * Build request payload for service 'serverNode' action 'markOffline'.
 *
 * Usage: Mark server node offline
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ServerNodeMarkOfflineAction extends KalturaRequest<KalturaServerNode> {

    serverNodeId : string;

    constructor(data : ServerNodeMarkOfflineActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaServerNode', responseConstructor : KalturaServerNode  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'servernode' },
				action : { type : 'c', default : 'markOffline' },
				serverNodeId : { type : 's' }
            }
        );
        return result;
    }
}

