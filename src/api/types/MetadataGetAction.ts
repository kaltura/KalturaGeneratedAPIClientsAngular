
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'metadata' action 'get'.
 *
 * Usage: Retrieve a metadata object by id
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MetadataGetAction extends KalturaRequest<KalturaMetadata> {

    id : number;

    constructor(data : MetadataGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

