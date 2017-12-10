
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfileFieldListResponse } from './KalturaMetadataProfileFieldListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataProfileListFieldsActionArgs  extends KalturaRequestArgs {
    metadataProfileId : number;
}

/**
 * Build request payload for service 'metadataProfile' action 'listFields'.
 *
 * Usage: List metadata profile fields by metadata profile id
 *
 * Server response type:         KalturaMetadataProfileFieldListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MetadataProfileListFieldsAction extends KalturaRequest<KalturaMetadataProfileFieldListResponse> {

    metadataProfileId : number;

    constructor(data : MetadataProfileListFieldsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMetadataProfileFieldListResponse', responseConstructor : KalturaMetadataProfileFieldListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'metadata_metadataprofile' },
				action : { type : 'c', default : 'listFields' },
				metadataProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

