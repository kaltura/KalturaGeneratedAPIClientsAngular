
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfile } from './KalturaStorageProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StorageProfileAddActionArgs  extends KalturaRequestArgs {
    storageProfile : KalturaStorageProfile;
}

/**
 * Build request payload for service 'storageProfile' action 'add'.
 *
 * Usage: Adds a storage profile to the Kaltura DB
 *
 * Server response type:         KalturaStorageProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class StorageProfileAddAction extends KalturaRequest<KalturaStorageProfile> {

    storageProfile : KalturaStorageProfile;

    constructor(data : StorageProfileAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				storageProfile : { type : 'o', subTypeConstructor : KalturaStorageProfile, subType : 'KalturaStorageProfile' }
            }
        );
        return result;
    }
}

