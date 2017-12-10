
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlProfile } from './KalturaAccessControlProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AccessControlProfileGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'accessControlProfile' action 'get'.
 *
 * Usage: Get access control profile by id
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AccessControlProfileGetAction extends KalturaRequest<KalturaAccessControlProfile> {

    id : number;

    constructor(data : AccessControlProfileGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAccessControlProfile', responseConstructor : KalturaAccessControlProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'accesscontrolprofile' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

