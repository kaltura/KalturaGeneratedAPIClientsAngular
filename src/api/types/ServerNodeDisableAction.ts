
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ServerNodeDisableActionArgs  extends KalturaRequestArgs {
    serverNodeId : string;
}

/**
 * Build request payload for service 'serverNode' action 'disable'.
 *
 * Usage: Disable server node by id
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ServerNodeDisableAction extends KalturaRequest<KalturaServerNode> {

    serverNodeId : string;

    constructor(data : ServerNodeDisableActionArgs)
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
				action : { type : 'c', default : 'disable' },
				serverNodeId : { type : 's' }
            }
        );
        return result;
    }
}

