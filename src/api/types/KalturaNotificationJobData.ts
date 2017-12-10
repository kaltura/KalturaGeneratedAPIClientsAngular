
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNotificationType } from './KalturaNotificationType';
import { KalturaNotificationStatus } from './KalturaNotificationStatus';
import { KalturaNotificationObjectType } from './KalturaNotificationObjectType';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaNotificationJobDataArgs  extends KalturaJobDataArgs {
    userId? : string;
	type? : KalturaNotificationType;
	typeAsString? : string;
	objectId? : string;
	status? : KalturaNotificationStatus;
	data? : string;
	numberOfAttempts? : number;
	notificationResult? : string;
	objType? : KalturaNotificationObjectType;
}


export class KalturaNotificationJobData extends KalturaJobData {

    userId : string;
	type : KalturaNotificationType;
	typeAsString : string;
	objectId : string;
	status : KalturaNotificationStatus;
	data : string;
	numberOfAttempts : number;
	notificationResult : string;
	objType : KalturaNotificationObjectType;

    constructor(data? : KalturaNotificationJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaNotificationJobData' },
				userId : { type : 's' },
				type : { type : 'en', subTypeConstructor : KalturaNotificationType, subType : 'KalturaNotificationType' },
				typeAsString : { type : 's' },
				objectId : { type : 's' },
				status : { type : 'en', subTypeConstructor : KalturaNotificationStatus, subType : 'KalturaNotificationStatus' },
				data : { type : 's' },
				numberOfAttempts : { type : 'n' },
				notificationResult : { type : 's' },
				objType : { type : 'en', subTypeConstructor : KalturaNotificationObjectType, subType : 'KalturaNotificationObjectType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaNotificationJobData',KalturaNotificationJobData);
