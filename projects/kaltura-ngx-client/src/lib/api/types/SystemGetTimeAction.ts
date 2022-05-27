
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SystemGetTimeActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'system' action 'getTime'.
 *
 * 
 *
 * Server response type:         Date
 * Server failure response type: KalturaAPIException
 */
export class SystemGetTimeAction extends KalturaRequest<Date> {

    

    constructor(data? : SystemGetTimeActionArgs)
    {
        super(data, {responseType : 'd', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'system' },
				action : { type : 'c', default : 'getTime' }
            }
        );
        return result;
    }
}

