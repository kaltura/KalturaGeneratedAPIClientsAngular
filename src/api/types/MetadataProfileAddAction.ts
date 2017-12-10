
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataProfileAddActionArgs  extends KalturaRequestArgs {
    metadataProfile : KalturaMetadataProfile;
	xsdData : string;
	viewsData? : string;
}

/**
 * Build request payload for service 'metadataProfile' action 'add'.
 *
 * Usage: Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MetadataProfileAddAction extends KalturaRequest<KalturaMetadataProfile> {

    metadataProfile : KalturaMetadataProfile;
	xsdData : string;
	viewsData : string;

    constructor(data : MetadataProfileAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				metadataProfile : { type : 'o', subTypeConstructor : KalturaMetadataProfile, subType : 'KalturaMetadataProfile' },
				xsdData : { type : 's' },
				viewsData : { type : 's' }
            }
        );
        return result;
    }
}

