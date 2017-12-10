
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParams } from './KalturaThumbParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbParamsUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	thumbParams : KalturaThumbParams;
}

/**
 * Build request payload for service 'thumbParams' action 'update'.
 *
 * Usage: Update Thumb Params by ID
 *
 * Server response type:         KalturaThumbParams
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ThumbParamsUpdateAction extends KalturaRequest<KalturaThumbParams> {

    id : number;
	thumbParams : KalturaThumbParams;

    constructor(data : ThumbParamsUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				thumbParams : { type : 'o', subTypeConstructor : KalturaThumbParams, subType : 'KalturaThumbParams' }
            }
        );
        return result;
    }
}

