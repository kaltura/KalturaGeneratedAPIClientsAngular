
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface MetadataUpdateFromXSLActionArgs  extends KalturaUploadRequestArgs {
    id : number;
	xslFile : File;
}

/**
 * Build request payload for service 'metadata' action 'updateFromXSL'.
 *
 * Usage: Action transforms current metadata object XML using a provided XSL
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class MetadataUpdateFromXSLAction extends KalturaUploadRequest<KalturaMetadata> {

    id : number;
	xslFile : File;

    constructor(data : MetadataUpdateFromXSLActionArgs)
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
				action : { type : 'c', default : 'updateFromXSL' },
				id : { type : 'n' },
				xslFile : { type : 'f' }
            }
        );
        return result;
    }
}

