
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConfListResponse } from './KalturaUiConfListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SharepointExtensionListUiconfsActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'sharepointExtension' action 'listUiconfs'.
 *
 * Usage: list uiconfs for sharepoint extension
 *
 * Server response type:         KalturaUiConfListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SharepointExtensionListUiconfsAction extends KalturaRequest<KalturaUiConfListResponse> {

    

    constructor(data? : SharepointExtensionListUiconfsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUiConfListResponse', responseConstructor : KalturaUiConfListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'kalturasharepointextension_sharepointextension' },
				action : { type : 'c', default : 'listUiconfs' }
            }
        );
        return result;
    }
}

