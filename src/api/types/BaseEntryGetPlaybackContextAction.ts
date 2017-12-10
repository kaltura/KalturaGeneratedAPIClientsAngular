
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaybackContext } from './KalturaPlaybackContext';

import { KalturaPlaybackContextOptions } from './KalturaPlaybackContextOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryGetPlaybackContextActionArgs  extends KalturaRequestArgs {
    entryId : string;
	contextDataParams : KalturaPlaybackContextOptions;
}

/**
 * Build request payload for service 'baseEntry' action 'getPlaybackContext'.
 *
 * Usage: This action delivers all data relevant for player
 *
 * Server response type:         KalturaPlaybackContext
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BaseEntryGetPlaybackContextAction extends KalturaRequest<KalturaPlaybackContext> {

    entryId : string;
	contextDataParams : KalturaPlaybackContextOptions;

    constructor(data : BaseEntryGetPlaybackContextActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPlaybackContext', responseConstructor : KalturaPlaybackContext  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'getPlaybackContext' },
				entryId : { type : 's' },
				contextDataParams : { type : 'o', subTypeConstructor : KalturaPlaybackContextOptions, subType : 'KalturaPlaybackContextOptions' }
            }
        );
        return result;
    }
}

