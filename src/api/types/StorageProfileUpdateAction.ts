
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfile } from './KalturaStorageProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StorageProfileUpdateActionArgs  extends KalturaRequestArgs {
    storageProfileId : number;
	storageProfile : KalturaStorageProfile;
}

/**
 * Build request payload for service 'storageProfile' action 'update'.
 *
 * Usage: Update storage profile by id
 *
 * Server response type:         KalturaStorageProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class StorageProfileUpdateAction extends KalturaRequest<KalturaStorageProfile> {

    storageProfileId : number;
	storageProfile : KalturaStorageProfile;

    constructor(data : StorageProfileUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaStorageProfile', responseConstructor : KalturaStorageProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'storageprofile' },
				action : { type : 'c', default : 'update' },
				storageProfileId : { type : 'n' },
				storageProfile : { type : 'o', subTypeConstructor : KalturaStorageProfile, subType : 'KalturaStorageProfile' }
            }
        );
        return result;
    }
}

