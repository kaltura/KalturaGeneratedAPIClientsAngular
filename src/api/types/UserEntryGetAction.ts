
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntry } from './KalturaUserEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserEntryGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'userEntry' action 'get'.
 *
 * 
 *
 * Server response type:         KalturaUserEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserEntryGetAction extends KalturaRequest<KalturaUserEntry> {

    id : string;

    constructor(data : UserEntryGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserEntry', responseConstructor : KalturaUserEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userentry' },
				action : { type : 'c', default : 'get' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

