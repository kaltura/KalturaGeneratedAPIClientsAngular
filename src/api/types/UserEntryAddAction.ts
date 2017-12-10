
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntry } from './KalturaUserEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserEntryAddActionArgs  extends KalturaRequestArgs {
    userEntry : KalturaUserEntry;
}

/**
 * Build request payload for service 'userEntry' action 'add'.
 *
 * Usage: Adds a user_entry to the Kaltura DB
 *
 * Server response type:         KalturaUserEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserEntryAddAction extends KalturaRequest<KalturaUserEntry> {

    userEntry : KalturaUserEntry;

    constructor(data : UserEntryAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				userEntry : { type : 'o', subTypeConstructor : KalturaUserEntry, subType : 'KalturaUserEntry' }
            }
        );
        return result;
    }
}

