
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParamsOutput } from './KalturaThumbParamsOutput';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbParamsOutputGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'thumbParamsOutput' action 'get'.
 *
 * Usage: Get thumb params output object by ID
 *
 * Server response type:         KalturaThumbParamsOutput
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ThumbParamsOutputGetAction extends KalturaRequest<KalturaThumbParamsOutput> {

    id : number;

    constructor(data : ThumbParamsOutputGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaThumbParamsOutput', responseConstructor : KalturaThumbParamsOutput  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'thumbparamsoutput' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

