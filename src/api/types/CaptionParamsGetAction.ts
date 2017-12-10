
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionParams } from './KalturaCaptionParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionParamsGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'captionParams' action 'get'.
 *
 * Usage: Get Caption Params by ID
 *
 * Server response type:         KalturaCaptionParams
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CaptionParamsGetAction extends KalturaRequest<KalturaCaptionParams> {

    id : number;

    constructor(data : CaptionParamsGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCaptionParams', responseConstructor : KalturaCaptionParams  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'caption_captionparams' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

