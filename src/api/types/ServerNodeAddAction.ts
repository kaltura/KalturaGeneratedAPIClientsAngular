
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ServerNodeAddActionArgs  extends KalturaRequestArgs {
    serverNode : KalturaServerNode;
}

/**
 * Build request payload for service 'serverNode' action 'add'.
 *
 * Usage: Adds a server node to the Kaltura DB
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ServerNodeAddAction extends KalturaRequest<KalturaServerNode> {

    serverNode : KalturaServerNode;

    constructor(data : ServerNodeAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				serverNode : { type : 'o', subTypeConstructor : KalturaServerNode, subType : 'KalturaServerNode' }
            }
        );
        return result;
    }
}

