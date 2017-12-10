
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyContentKey } from './KalturaPlayReadyContentKey';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlayReadyDrmGenerateKeyActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'playReadyDrm' action 'generateKey'.
 *
 * Usage: Generate key id and content key for PlayReady encryption
 *
 * Server response type:         KalturaPlayReadyContentKey
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PlayReadyDrmGenerateKeyAction extends KalturaRequest<KalturaPlayReadyContentKey> {

    

    constructor(data? : PlayReadyDrmGenerateKeyActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPlayReadyContentKey', responseConstructor : KalturaPlayReadyContentKey  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'playready_playreadydrm' },
				action : { type : 'c', default : 'generateKey' }
            }
        );
        return result;
    }
}

