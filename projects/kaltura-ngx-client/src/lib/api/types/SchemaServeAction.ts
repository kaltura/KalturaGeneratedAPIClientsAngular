
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaSchemaType } from './KalturaSchemaType';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface SchemaServeActionArgs  extends KalturaFileRequestArgs {
    type : KalturaSchemaType;
}

/**
 * Build request payload for service 'schema' action 'serve'.
 *
 * Usage: Serves the requested XSD according to the type and name
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class SchemaServeAction extends KalturaFileRequest {

    type : KalturaSchemaType;

    constructor(data : SchemaServeActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'schema' },
				action : { type : 'c', default : 'serve' },
				type : { type : 'es', subTypeConstructor : KalturaSchemaType, subType : 'KalturaSchemaType' }
            }
        );
        return result;
    }
}

