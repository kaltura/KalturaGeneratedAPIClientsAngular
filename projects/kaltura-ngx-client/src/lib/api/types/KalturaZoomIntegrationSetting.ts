
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaHandleParticipantsMode } from './KalturaHandleParticipantsMode';
import { KalturaZoomUsersMatching } from './KalturaZoomUsersMatching';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaZoomIntegrationSettingArgs  extends KalturaObjectBaseArgs {
    defaultUserId? : string;
	zoomCategory? : string;
	enableRecordingUpload? : KalturaNullableBoolean;
	createUserIfNotExist? : KalturaNullableBoolean;
	handleParticipantsMode? : KalturaHandleParticipantsMode;
	zoomUserMatchingMode? : KalturaZoomUsersMatching;
	zoomUserPostfix? : string;
	zoomWebinarCategory? : string;
	enableWebinarUploads? : KalturaNullableBoolean;
	conversionProfileId? : number;
	jwtToken? : string;
	deletionPolicy? : KalturaNullableBoolean;
	enableZoomTranscription? : KalturaNullableBoolean;
	zoomAccountDescription? : string;
}


export class KalturaZoomIntegrationSetting extends KalturaObjectBase {

    defaultUserId : string;
	zoomCategory : string;
	readonly accountId : string;
	enableRecordingUpload : KalturaNullableBoolean;
	createUserIfNotExist : KalturaNullableBoolean;
	handleParticipantsMode : KalturaHandleParticipantsMode;
	zoomUserMatchingMode : KalturaZoomUsersMatching;
	zoomUserPostfix : string;
	zoomWebinarCategory : string;
	enableWebinarUploads : KalturaNullableBoolean;
	conversionProfileId : number;
	jwtToken : string;
	deletionPolicy : KalturaNullableBoolean;
	enableZoomTranscription : KalturaNullableBoolean;
	zoomAccountDescription : string;

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
				accountId : { type : 's', readOnly : true },
				enableRecordingUpload : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				createUserIfNotExist : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				handleParticipantsMode : { type : 'en', subTypeConstructor : KalturaHandleParticipantsMode, subType : 'KalturaHandleParticipantsMode' },
				zoomUserMatchingMode : { type : 'en', subTypeConstructor : KalturaZoomUsersMatching, subType : 'KalturaZoomUsersMatching' },
				zoomUserPostfix : { type : 's' },
				zoomWebinarCategory : { type : 's' },
				enableWebinarUploads : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				conversionProfileId : { type : 'n' },
				jwtToken : { type : 's' },
				deletionPolicy : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				enableZoomTranscription : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				zoomAccountDescription : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaZoomIntegrationSetting'] = KalturaZoomIntegrationSetting;