
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ServerNodeGetFullPathActionArgs  extends KalturaRequestArgs {
    hostName : string;
	protocol? : string;
	deliveryFormat? : string;
	deliveryType? : string;
}

/**
 * Build request payload for service 'serverNode' action 'getFullPath'.
 *
 * Usage: Get the edge server node full path
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class ServerNodeGetFullPathAction extends KalturaRequest<string> {

    hostName : string;
	protocol : string;
	deliveryFormat : string;
	deliveryType : string;

    constructor(data : ServerNodeGetFullPathActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
        if (typeof this.protocol === 'undefined') this.protocol = "http";
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'servernode' },
				action : { type : 'c', default : 'getFullPath' },
				hostName : { type : 's' },
				protocol : { type : 's' },
				deliveryFormat : { type : 's' },
				deliveryType : { type : 's' }
            }
        );
        return result;
    }
}

