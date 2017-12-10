
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ServerNodeUpdateActionArgs  extends KalturaRequestArgs {
    serverNodeId : number;
	serverNode : KalturaServerNode;
}

/**
 * Build request payload for service 'serverNode' action 'update'.
 *
 * Usage: Update server node by id
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ServerNodeUpdateAction extends KalturaRequest<KalturaServerNode> {

    serverNodeId : number;
	serverNode : KalturaServerNode;

    constructor(data : ServerNodeUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				serverNodeId : { type : 'n' },
				serverNode : { type : 'o', subTypeConstructor : KalturaServerNode, subType : 'KalturaServerNode' }
            }
        );
        return result;
    }
}

