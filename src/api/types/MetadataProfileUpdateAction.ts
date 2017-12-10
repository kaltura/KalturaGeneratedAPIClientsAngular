
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	metadataProfile : KalturaMetadataProfile;
	xsdData? : string;
	viewsData? : string;
}

/**
 * Build request payload for service 'metadataProfile' action 'update'.
 *
 * Usage: Update an existing metadata object
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MetadataProfileUpdateAction extends KalturaRequest<KalturaMetadataProfile> {

    id : number;
	metadataProfile : KalturaMetadataProfile;
	xsdData : string;
	viewsData : string;

    constructor(data : MetadataProfileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				metadataProfile : { type : 'o', subTypeConstructor : KalturaMetadataProfile, subType : 'KalturaMetadataProfile' },
				xsdData : { type : 's' },
				viewsData : { type : 's' }
            }
        );
        return result;
    }
}

