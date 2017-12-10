
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlProfile } from './KalturaAccessControlProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AccessControlProfileAddActionArgs  extends KalturaRequestArgs {
    accessControlProfile : KalturaAccessControlProfile;
}

/**
 * Build request payload for service 'accessControlProfile' action 'add'.
 *
 * Usage: Add new access control profile
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AccessControlProfileAddAction extends KalturaRequest<KalturaAccessControlProfile> {

    accessControlProfile : KalturaAccessControlProfile;

    constructor(data : AccessControlProfileAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				accessControlProfile : { type : 'o', subTypeConstructor : KalturaAccessControlProfile, subType : 'KalturaAccessControlProfile' }
            }
        );
        return result;
    }
}

