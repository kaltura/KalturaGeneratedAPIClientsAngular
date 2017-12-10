
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';

import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaDataCenterContentResource } from './KalturaDataCenterContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelSetRecordedContentActionArgs  extends KalturaRequestArgs {
    entryId : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	resource : KalturaDataCenterContentResource;
	duration : number;
	recordedEntryId? : string;
	flavorParamsId? : number;
}

/**
 * Build request payload for service 'liveChannel' action 'setRecordedContent'.
 *
 * Usage: Set recorded video to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveChannelSetRecordedContentAction extends KalturaRequest<KalturaLiveEntry> {

    entryId : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	resource : KalturaDataCenterContentResource;
	duration : number;
	recordedEntryId : string;
	flavorParamsId : number;

    constructor(data : LiveChannelSetRecordedContentActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveEntry', responseConstructor : KalturaLiveEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livechannel' },
				action : { type : 'c', default : 'setRecordedContent' },
				entryId : { type : 's' },
				mediaServerIndex : { type : 'es', subTypeConstructor : KalturaEntryServerNodeType, subType : 'KalturaEntryServerNodeType' },
				resource : { type : 'o', subTypeConstructor : KalturaDataCenterContentResource, subType : 'KalturaDataCenterContentResource' },
				duration : { type : 'n' },
				recordedEntryId : { type : 's' },
				flavorParamsId : { type : 'n' }
            }
        );
        return result;
    }
}

