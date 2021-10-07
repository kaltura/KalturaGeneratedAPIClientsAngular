
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaZoomUsersMatching } from './KalturaZoomUsersMatching';
import { KalturaIntegrationSetting, KalturaIntegrationSettingArgs } from './KalturaIntegrationSetting';

export interface KalturaZoomIntegrationSettingArgs  extends KalturaIntegrationSettingArgs {
    zoomCategory? : string;
	enableRecordingUpload? : KalturaNullableBoolean;
	zoomUserMatchingMode? : KalturaZoomUsersMatching;
	zoomUserPostfix? : string;
	zoomWebinarCategory? : string;
	enableWebinarUploads? : KalturaNullableBoolean;
	jwtToken? : string;
	enableZoomTranscription? : KalturaNullableBoolean;
	zoomAccountDescription? : string;
	enableMeetingUpload? : KalturaNullableBoolean;
}


export class KalturaZoomIntegrationSetting extends KalturaIntegrationSetting {

    zoomCategory : string;
	enableRecordingUpload : KalturaNullableBoolean;
	zoomUserMatchingMode : KalturaZoomUsersMatching;
	zoomUserPostfix : string;
	zoomWebinarCategory : string;
	enableWebinarUploads : KalturaNullableBoolean;
	jwtToken : string;
	enableZoomTranscription : KalturaNullableBoolean;
	zoomAccountDescription : string;
	enableMeetingUpload : KalturaNullableBoolean;

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
				zoomCategory : { type : 's' },
				enableRecordingUpload : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				zoomUserMatchingMode : { type : 'en', subTypeConstructor : KalturaZoomUsersMatching, subType : 'KalturaZoomUsersMatching' },
				zoomUserPostfix : { type : 's' },
				zoomWebinarCategory : { type : 's' },
				enableWebinarUploads : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				jwtToken : { type : 's' },
				enableZoomTranscription : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				zoomAccountDescription : { type : 's' },
				enableMeetingUpload : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaZoomIntegrationSetting'] = KalturaZoomIntegrationSetting;