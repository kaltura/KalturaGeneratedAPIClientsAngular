
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';

import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataAddFromUrlActionArgs  extends KalturaRequestArgs {
    metadataProfileId : number;
	objectType : KalturaMetadataObjectType;
	objectId : string;
	url : string;
}

/**
 * Build request payload for service 'metadata' action 'addFromUrl'.
 *
 * Usage: Allows you to add a metadata xml data from remote URL
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MetadataAddFromUrlAction extends KalturaRequest<KalturaMetadata> {

    metadataProfileId : number;
	objectType : KalturaMetadataObjectType;
	objectId : string;
	url : string;

    constructor(data : MetadataAddFromUrlActionArgs)
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
				action : { type : 'c', default : 'addFromUrl' },
				metadataProfileId : { type : 'n' },
				objectType : { type : 'es', subTypeConstructor : KalturaMetadataObjectType, subType : 'KalturaMetadataObjectType' },
				objectId : { type : 's' },
				url : { type : 's' }
            }
        );
        return result;
    }
}

