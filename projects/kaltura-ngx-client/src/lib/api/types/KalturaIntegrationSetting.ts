
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorIntegrationStatus } from './KalturaVendorIntegrationStatus';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaHandleParticipantsMode } from './KalturaHandleParticipantsMode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIntegrationSettingArgs  extends KalturaObjectBaseArgs {
    defaultUserId? : string;
	createUserIfNotExist? : KalturaNullableBoolean;
	conversionProfileId? : number;
	handleParticipantsMode? : KalturaHandleParticipantsMode;
	deletionPolicy? : KalturaNullableBoolean;
	enableMeetingUpload? : KalturaNullableBoolean;
}


export class KalturaIntegrationSetting extends KalturaObjectBase {

    readonly id : number;
	readonly status : KalturaVendorIntegrationStatus;
	defaultUserId : string;
	readonly accountId : string;
	createUserIfNotExist : KalturaNullableBoolean;
	conversionProfileId : number;
	handleParticipantsMode : KalturaHandleParticipantsMode;
	deletionPolicy : KalturaNullableBoolean;
	readonly createdAt : string;
	readonly updatedAt : string;
	readonly partnerId : number;
	enableMeetingUpload : KalturaNullableBoolean;

    constructor(data? : KalturaIntegrationSettingArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIntegrationSetting' },
				id : { type : 'n', readOnly : true },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaVendorIntegrationStatus, subType : 'KalturaVendorIntegrationStatus' },
				defaultUserId : { type : 's' },
				accountId : { type : 's', readOnly : true },
				createUserIfNotExist : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				conversionProfileId : { type : 'n' },
				handleParticipantsMode : { type : 'en', subTypeConstructor : KalturaHandleParticipantsMode, subType : 'KalturaHandleParticipantsMode' },
				deletionPolicy : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				createdAt : { type : 's', readOnly : true },
				updatedAt : { type : 's', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				enableMeetingUpload : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIntegrationSetting'] = KalturaIntegrationSetting;