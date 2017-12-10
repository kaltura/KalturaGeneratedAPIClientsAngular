
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ServerNodeGetActionArgs  extends KalturaRequestArgs {
    serverNodeId : number;
}

/**
 * Build request payload for service 'serverNode' action 'get'.
 *
 * Usage: Get server node by id
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ServerNodeGetAction extends KalturaRequest<KalturaServerNode> {

    serverNodeId : number;

    constructor(data : ServerNodeGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				serverNodeId : { type : 'n' }
            }
        );
        return result;
    }
}

