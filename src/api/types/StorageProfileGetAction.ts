
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfile } from './KalturaStorageProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StorageProfileGetActionArgs  extends KalturaRequestArgs {
    storageProfileId : number;
}

/**
 * Build request payload for service 'storageProfile' action 'get'.
 *
 * Usage: Get storage profile by id
 *
 * Server response type:         KalturaStorageProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class StorageProfileGetAction extends KalturaRequest<KalturaStorageProfile> {

    storageProfileId : number;

    constructor(data : StorageProfileGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				storageProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

