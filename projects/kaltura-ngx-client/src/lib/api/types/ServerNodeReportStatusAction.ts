
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';

import { KalturaServerNodeStatus } from './KalturaServerNodeStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ServerNodeReportStatusActionArgs  extends KalturaRequestArgs {
    hostName : string;
	serverNode? : KalturaServerNode;
	serverNodeStatus? : KalturaServerNodeStatus;
}

/**
 * Build request payload for service 'serverNode' action 'reportStatus'.
 *
 * Usage: Update server node status
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
export class ServerNodeReportStatusAction extends KalturaRequest<KalturaServerNode> {

    hostName : string;
	serverNode : KalturaServerNode;
	serverNodeStatus : KalturaServerNodeStatus;

    constructor(data : ServerNodeReportStatusActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaServerNode', responseConstructor : KalturaServerNode  });
        if (typeof this.serverNodeStatus === 'undefined') this.serverNodeStatus = 1;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'servernode' },
				action : { type : 'c', default : 'reportStatus' },
				hostName : { type : 's' },
				serverNode : { type : 'o', subTypeConstructor : KalturaServerNode, subType : 'KalturaServerNode' },
				serverNodeStatus : { type : 'en', subTypeConstructor : KalturaServerNodeStatus, subType : 'KalturaServerNodeStatus' }
            }
        );
        return result;
    }
}

