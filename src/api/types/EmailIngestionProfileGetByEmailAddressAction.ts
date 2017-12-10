
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEmailIngestionProfile } from './KalturaEmailIngestionProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EmailIngestionProfileGetByEmailAddressActionArgs  extends KalturaRequestArgs {
    emailAddress : string;
}

/**
 * Build request payload for service 'EmailIngestionProfile' action 'getByEmailAddress'.
 *
 * Usage: Retrieve a EmailIngestionProfile by email address
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EmailIngestionProfileGetByEmailAddressAction extends KalturaRequest<KalturaEmailIngestionProfile> {

    emailAddress : string;

    constructor(data : EmailIngestionProfileGetByEmailAddressActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEmailIngestionProfile', responseConstructor : KalturaEmailIngestionProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'emailingestionprofile' },
				action : { type : 'c', default : 'getByEmailAddress' },
				emailAddress : { type : 's' }
            }
        );
        return result;
    }
}

