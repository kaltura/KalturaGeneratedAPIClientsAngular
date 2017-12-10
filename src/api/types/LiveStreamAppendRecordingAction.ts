
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';

import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaDataCenterContentResource } from './KalturaDataCenterContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamAppendRecordingActionArgs  extends KalturaRequestArgs {
    entryId : string;
	assetId : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	resource : KalturaDataCenterContentResource;
	duration : number;
	isLastChunk? : boolean;
}

/**
 * Build request payload for service 'liveStream' action 'appendRecording'.
 *
 * Usage: Append recorded video to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveStreamAppendRecordingAction extends KalturaRequest<KalturaLiveEntry> {

    entryId : string;
	assetId : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	resource : KalturaDataCenterContentResource;
	duration : number;
	isLastChunk : boolean;

    constructor(data : LiveStreamAppendRecordingActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveEntry', responseConstructor : KalturaLiveEntry  });
        if (typeof this.isLastChunk === 'undefined') this.isLastChunk = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'appendRecording' },
				entryId : { type : 's' },
				assetId : { type : 's' },
				mediaServerIndex : { type : 'es', subTypeConstructor : KalturaEntryServerNodeType, subType : 'KalturaEntryServerNodeType' },
				resource : { type : 'o', subTypeConstructor : KalturaDataCenterContentResource, subType : 'KalturaDataCenterContentResource' },
				duration : { type : 'n' },
				isLastChunk : { type : 'b' }
            }
        );
        return result;
    }
}

