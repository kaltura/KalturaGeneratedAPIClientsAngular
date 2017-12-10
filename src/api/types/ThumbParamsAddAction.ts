
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParams } from './KalturaThumbParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbParamsAddActionArgs  extends KalturaRequestArgs {
    thumbParams : KalturaThumbParams;
}

/**
 * Build request payload for service 'thumbParams' action 'add'.
 *
 * Usage: Add new Thumb Params
 *
 * Server response type:         KalturaThumbParams
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ThumbParamsAddAction extends KalturaRequest<KalturaThumbParams> {

    thumbParams : KalturaThumbParams;

    constructor(data : ThumbParamsAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaThumbParams', responseConstructor : KalturaThumbParams  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'thumbparams' },
				action : { type : 'c', default : 'add' },
				thumbParams : { type : 'o', subTypeConstructor : KalturaThumbParams, subType : 'KalturaThumbParams' }
            }
        );
        return result;
    }
}

