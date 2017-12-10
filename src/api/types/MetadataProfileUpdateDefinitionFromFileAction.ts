
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface MetadataProfileUpdateDefinitionFromFileActionArgs  extends KalturaUploadRequestArgs {
    id : number;
	xsdFile : File;
}

/**
 * Build request payload for service 'metadataProfile' action 'updateDefinitionFromFile'.
 *
 * Usage: Update an existing metadata object definition file
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class MetadataProfileUpdateDefinitionFromFileAction extends KalturaUploadRequest<KalturaMetadataProfile> {

    id : number;
	xsdFile : File;

    constructor(data : MetadataProfileUpdateDefinitionFromFileActionArgs)
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
				action : { type : 'c', default : 'updateDefinitionFromFile' },
				id : { type : 'n' },
				xsdFile : { type : 'f' }
            }
        );
        return result;
    }
}

