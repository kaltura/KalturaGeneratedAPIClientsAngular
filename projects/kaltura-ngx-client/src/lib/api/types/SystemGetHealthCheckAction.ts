
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SystemGetHealthCheckActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'system' action 'getHealthCheck'.
 *
 * 
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class SystemGetHealthCheckAction extends KalturaRequest<string> {

    

    constructor(data? : SystemGetHealthCheckActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'system' },
				action : { type : 'c', default : 'getHealthCheck' }
            }
        );
        return result;
    }
}

