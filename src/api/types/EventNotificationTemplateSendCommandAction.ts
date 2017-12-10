
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaPushNotificationParams } from './KalturaPushNotificationParams';
import { KalturaPushNotificationCommandType } from './KalturaPushNotificationCommandType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateSendCommandActionArgs  extends KalturaRequestArgs {
    notificationTemplateSystemName : string;
	pushNotificationParams : KalturaPushNotificationParams;
	command : KalturaPushNotificationCommandType;
}

/**
 * Build request payload for service 'eventNotificationTemplate' action 'sendCommand'.
 *
 * Usage: Clear queue messages
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EventNotificationTemplateSendCommandAction extends KalturaRequest<void> {

    notificationTemplateSystemName : string;
	pushNotificationParams : KalturaPushNotificationParams;
	command : KalturaPushNotificationCommandType;

    constructor(data : EventNotificationTemplateSendCommandActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'eventnotification_eventnotificationtemplate' },
				action : { type : 'c', default : 'sendCommand' },
				notificationTemplateSystemName : { type : 's' },
				pushNotificationParams : { type : 'o', subTypeConstructor : KalturaPushNotificationParams, subType : 'KalturaPushNotificationParams' },
				command : { type : 'es', subTypeConstructor : KalturaPushNotificationCommandType, subType : 'KalturaPushNotificationCommandType' }
            }
        );
        return result;
    }
}

