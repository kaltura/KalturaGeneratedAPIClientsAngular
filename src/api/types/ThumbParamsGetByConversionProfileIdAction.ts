
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParams } from './KalturaThumbParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbParamsGetByConversionProfileIdActionArgs  extends KalturaRequestArgs {
    conversionProfileId : number;
}

/**
 * Build request payload for service 'thumbParams' action 'getByConversionProfileId'.
 *
 * Usage: Get Thumb Params by Conversion Profile ID
 *
 * Server response type:         KalturaThumbParams[]
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ThumbParamsGetByConversionProfileIdAction extends KalturaRequest<KalturaThumbParams[]> {

    conversionProfileId : number;

    constructor(data : ThumbParamsGetByConversionProfileIdActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaThumbParams', responseConstructor : KalturaThumbParams  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'thumbparams' },
				action : { type : 'c', default : 'getByConversionProfileId' },
				conversionProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

