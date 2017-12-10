
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConf } from './KalturaUiConf';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UiConfGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'uiConf' action 'get'.
 *
 * Usage: Retrieve a UIConf by id
 *
 * Server response type:         KalturaUiConf
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UiConfGetAction extends KalturaRequest<KalturaUiConf> {

    id : number;

    constructor(data : UiConfGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUiConf', responseConstructor : KalturaUiConf  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'uiconf' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

