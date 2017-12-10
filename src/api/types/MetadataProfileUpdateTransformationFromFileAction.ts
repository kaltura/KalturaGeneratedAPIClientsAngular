
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface MetadataProfileUpdateTransformationFromFileActionArgs  extends KalturaUploadRequestArgs {
    id : number;
	xsltFile : File;
}

/**
 * Build request payload for service 'metadataProfile' action 'updateTransformationFromFile'.
 *
 * Usage: Update an existing metadata object xslt file
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class MetadataProfileUpdateTransformationFromFileAction extends KalturaUploadRequest<KalturaMetadataProfile> {

    id : number;
	xsltFile : File;

    constructor(data : MetadataProfileUpdateTransformationFromFileActionArgs)
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
				action : { type : 'c', default : 'updateTransformationFromFile' },
				id : { type : 'n' },
				xsltFile : { type : 'f' }
            }
        );
        return result;
    }
}

