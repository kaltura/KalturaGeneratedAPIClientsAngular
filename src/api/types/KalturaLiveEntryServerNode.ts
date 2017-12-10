
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveStreamParams } from './KalturaLiveStreamParams';
import { KalturaLiveEntryServerNodeRecordingInfo } from './KalturaLiveEntryServerNodeRecordingInfo';
import { KalturaEntryServerNode, KalturaEntryServerNodeArgs } from './KalturaEntryServerNode';

export interface KalturaLiveEntryServerNodeArgs  extends KalturaEntryServerNodeArgs {
    streams? : KalturaLiveStreamParams[];
	recordingInfo? : KalturaLiveEntryServerNodeRecordingInfo[];
}


export class KalturaLiveEntryServerNode extends KalturaEntryServerNode {

    streams : KalturaLiveStreamParams[];
	recordingInfo : KalturaLiveEntryServerNodeRecordingInfo[];

    constructor(data? : KalturaLiveEntryServerNodeArgs)
    {
        super(data);
        if (typeof this.streams === 'undefined') this.streams = [];
		if (typeof this.recordingInfo === 'undefined') this.recordingInfo = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryServerNode' },
				streams : { type : 'a', subTypeConstructor : KalturaLiveStreamParams, subType : 'KalturaLiveStreamParams' },
				recordingInfo : { type : 'a', subTypeConstructor : KalturaLiveEntryServerNodeRecordingInfo, subType : 'KalturaLiveEntryServerNodeRecordingInfo' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveEntryServerNode',KalturaLiveEntryServerNode);
