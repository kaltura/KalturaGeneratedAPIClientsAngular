
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntry } from './KalturaUserEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserEntryDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'userEntry' action 'delete'.
 *
 * 
 *
 * Server response type:         KalturaUserEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserEntryDeleteAction extends KalturaRequest<KalturaUserEntry> {

    id : number;

    constructor(data : UserEntryDeleteActionArgs)
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
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

