
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface MetadataProfileAddFromFileActionArgs  extends KalturaUploadRequestArgs {
    metadataProfile : KalturaMetadataProfile;
	xsdFile : File;
	viewsFile? : File;
}

/**
 * Build request payload for service 'metadataProfile' action 'addFromFile'.
 *
 * Usage: Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class MetadataProfileAddFromFileAction extends KalturaUploadRequest<KalturaMetadataProfile> {

    metadataProfile : KalturaMetadataProfile;
	xsdFile : File;
	viewsFile : File;

    constructor(data : MetadataProfileAddFromFileActionArgs)
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
				action : { type : 'c', default : 'addFromFile' },
				metadataProfile : { type : 'o', subTypeConstructor : KalturaMetadataProfile, subType : 'KalturaMetadataProfile' },
				xsdFile : { type : 'f' },
				viewsFile : { type : 'f' }
            }
        );
        return result;
    }
}

