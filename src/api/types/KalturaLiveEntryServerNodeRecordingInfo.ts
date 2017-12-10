
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryServerNodeRecordingStatus } from './KalturaEntryServerNodeRecordingStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveEntryServerNodeRecordingInfoArgs  extends KalturaObjectBaseArgs {
    recordedEntryId? : string;
	duration? : number;
	recordingStatus? : KalturaEntryServerNodeRecordingStatus;
}


export class KalturaLiveEntryServerNodeRecordingInfo extends KalturaObjectBase {

    recordedEntryId : string;
	duration : number;
	recordingStatus : KalturaEntryServerNodeRecordingStatus;

    constructor(data? : KalturaLiveEntryServerNodeRecordingInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryServerNodeRecordingInfo' },
				recordedEntryId : { type : 's' },
				duration : { type : 'n' },
				recordingStatus : { type : 'en', subTypeConstructor : KalturaEntryServerNodeRecordingStatus, subType : 'KalturaEntryServerNodeRecordingStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveEntryServerNodeRecordingInfo',KalturaLiveEntryServerNodeRecordingInfo);
