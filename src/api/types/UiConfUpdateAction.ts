
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConf } from './KalturaUiConf';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UiConfUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	uiConf : KalturaUiConf;
}

/**
 * Build request payload for service 'uiConf' action 'update'.
 *
 * Usage: Update an existing UIConf
 *
 * Server response type:         KalturaUiConf
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UiConfUpdateAction extends KalturaRequest<KalturaUiConf> {

    id : number;
	uiConf : KalturaUiConf;

    constructor(data : UiConfUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				uiConf : { type : 'o', subTypeConstructor : KalturaUiConf, subType : 'KalturaUiConf' }
            }
        );
        return result;
    }
}

