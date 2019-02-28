
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntry } from './KalturaUserEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserEntryUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	userEntry : KalturaUserEntry;
}

/**
 * Build request payload for service 'userEntry' action 'update'.
 *
 * 
 *
 * Server response type:         KalturaUserEntry
 * Server failure response type: KalturaAPIException
 */
export class UserEntryUpdateAction extends KalturaRequest<KalturaUserEntry> {

    id : number;
	userEntry : KalturaUserEntry;

    constructor(data : UserEntryUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				userEntry : { type : 'o', subTypeConstructor : KalturaUserEntry, subType : 'KalturaUserEntry' }
            }
        );
        return result;
    }
}

