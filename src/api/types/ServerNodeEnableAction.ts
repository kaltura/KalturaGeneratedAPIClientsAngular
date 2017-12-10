
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ServerNodeEnableActionArgs  extends KalturaRequestArgs {
    serverNodeId : string;
}

/**
 * Build request payload for service 'serverNode' action 'enable'.
 *
 * Usage: Enable server node by id
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ServerNodeEnableAction extends KalturaRequest<KalturaServerNode> {

    serverNodeId : string;

    constructor(data : ServerNodeEnableActionArgs)
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
				action : { type : 'c', default : 'enable' },
				serverNodeId : { type : 's' }
            }
        );
        return result;
    }
}

