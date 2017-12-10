
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataProfileRevertActionArgs  extends KalturaRequestArgs {
    id : number;
	toVersion : number;
}

/**
 * Build request payload for service 'metadataProfile' action 'revert'.
 *
 * Usage: Update an existing metadata object definition file
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MetadataProfileRevertAction extends KalturaRequest<KalturaMetadataProfile> {

    id : number;
	toVersion : number;

    constructor(data : MetadataProfileRevertActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMetadataProfile', responseConstructor : KalturaMetadataProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'metadata_metadataprofile' },
				action : { type : 'c', default : 'revert' },
				id : { type : 'n' },
				toVersion : { type : 'n' }
            }
        );
        return result;
    }
}

