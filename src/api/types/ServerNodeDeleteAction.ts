
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ServerNodeDeleteActionArgs  extends KalturaRequestArgs {
    serverNodeId : string;
}

/**
 * Build request payload for service 'serverNode' action 'delete'.
 *
 * Usage: delete server node by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ServerNodeDeleteAction extends KalturaRequest<void> {

    serverNodeId : string;

    constructor(data : ServerNodeDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'servernode' },
				action : { type : 'c', default : 'delete' },
				serverNodeId : { type : 's' }
            }
        );
        return result;
    }
}

