
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfMapsGetBatchMapActionArgs  extends KalturaRequestArgs {
    hostName : string;
}

/**
 * Build request payload for service 'confMaps' action 'getBatchMap'.
 *
 * Usage: Get batch configuration map
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class ConfMapsGetBatchMapAction extends KalturaRequest<string> {

    hostName : string;

    constructor(data : ConfMapsGetBatchMapActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'confmaps_confmaps' },
				action : { type : 'c', default : 'getBatchMap' },
				hostName : { type : 's' }
            }
        );
        return result;
    }
}

