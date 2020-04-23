
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaHandleParticipantsMode } from './KalturaHandleParticipantsMode';
import { KalturaZoomUsersMatching } from './KalturaZoomUsersMatching';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaZoomIntegrationSettingArgs  extends KalturaObjectBaseArgs {
    defaultUserId? : string;
	zoomCategory? : string;
	accountId? : string;
	enableRecordingUpload? : KalturaNullableBoolean;
	createUserIfNotExist? : KalturaNullableBoolean;
	handleParticipantMode? : KalturaHandleParticipantsMode;
	zoomUserMatchingMode? : KalturaZoomUsersMatching;
	zoomUserPostfix? : string;
	zoomWebinarCategory? : string;
	enableWebinarUploads? : KalturaNullableBoolean;
}


export class KalturaZoomIntegrationSetting extends KalturaObjectBase {

    defaultUserId : string;
	zoomCategory : string;
	accountId : string;
	enableRecordingUpload : KalturaNullableBoolean;
	createUserIfNotExist : KalturaNullableBoolean;
	handleParticipantMode : KalturaHandleParticipantsMode;
	zoomUserMatchingMode : KalturaZoomUsersMatching;
	zoomUserPostfix : string;
	zoomWebinarCategory : string;
	enableWebinarUploads : KalturaNullableBoolean;

    constructor(data? : KalturaZoomIntegrationSettingArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaZoomIntegrationSetting' },
				defaultUserId : { type : 's' },
				zoomCategory : { type : 's' },
				accountId : { type : 's' },
				enableRecordingUpload : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				createUserIfNotExist : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				handleParticipantMode : { type : 'en', subTypeConstructor : KalturaHandleParticipantsMode, subType : 'KalturaHandleParticipantsMode' },
				zoomUserMatchingMode : { type : 'en', subTypeConstructor : KalturaZoomUsersMatching, subType : 'KalturaZoomUsersMatching' },
				zoomUserPostfix : { type : 's' },
				zoomWebinarCategory : { type : 's' },
				enableWebinarUploads : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaZoomIntegrationSetting'] = KalturaZoomIntegrationSetting;