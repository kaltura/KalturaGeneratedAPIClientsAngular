
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface MetadataUpdateFromFileActionArgs  extends KalturaUploadRequestArgs {
    id : number;
	xmlFile? : File;
}

/**
 * Build request payload for service 'metadata' action 'updateFromFile'.
 *
 * Usage: Update an existing metadata object with new XML file
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class MetadataUpdateFromFileAction extends KalturaUploadRequest<KalturaMetadata> {

    id : number;
	xmlFile : File;

    constructor(data : MetadataUpdateFromFileActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMetadata', responseConstructor : KalturaMetadata  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'metadata_metadata' },
				action : { type : 'c', default : 'updateFromFile' },
				id : { type : 'n' },
				xmlFile : { type : 'f' }
            }
        );
        return result;
    }
}

