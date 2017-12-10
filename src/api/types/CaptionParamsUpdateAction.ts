
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionParams } from './KalturaCaptionParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionParamsUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	captionParams : KalturaCaptionParams;
}

/**
 * Build request payload for service 'captionParams' action 'update'.
 *
 * Usage: Update Caption Params by ID
 *
 * Server response type:         KalturaCaptionParams
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CaptionParamsUpdateAction extends KalturaRequest<KalturaCaptionParams> {

    id : number;
	captionParams : KalturaCaptionParams;

    constructor(data : CaptionParamsUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				captionParams : { type : 'o', subTypeConstructor : KalturaCaptionParams, subType : 'KalturaCaptionParams' }
            }
        );
        return result;
    }
}

