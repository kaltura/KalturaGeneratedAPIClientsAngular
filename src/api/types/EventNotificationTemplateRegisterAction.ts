
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPushNotificationData } from './KalturaPushNotificationData';

import { KalturaPushNotificationParams } from './KalturaPushNotificationParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateRegisterActionArgs  extends KalturaRequestArgs {
    notificationTemplateSystemName : string;
	pushNotificationParams : KalturaPushNotificationParams;
}

/**
 * Build request payload for service 'eventNotificationTemplate' action 'register'.
 *
 * Usage: Register to a queue from which event messages will be provided according to given template. Queue will be created if not already exists
 *
 * Server response type:         KalturaPushNotificationData
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EventNotificationTemplateRegisterAction extends KalturaRequest<KalturaPushNotificationData> {

    notificationTemplateSystemName : string;
	pushNotificationParams : KalturaPushNotificationParams;

    constructor(data : EventNotificationTemplateRegisterActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPushNotificationData', responseConstructor : KalturaPushNotificationData  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'eventnotification_eventnotificationtemplate' },
				action : { type : 'c', default : 'register' },
				notificationTemplateSystemName : { type : 's' },
				pushNotificationParams : { type : 'o', subTypeConstructor : KalturaPushNotificationParams, subType : 'KalturaPushNotificationParams' }
            }
        );
        return result;
    }
}

