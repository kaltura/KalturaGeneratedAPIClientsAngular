
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateCloneActionArgs  extends KalturaRequestArgs {
    id : number;
	eventNotificationTemplate? : KalturaEventNotificationTemplate;
}

/**
 * Build request payload for service 'eventNotificationTemplate' action 'clone'.
 *
 * Usage: This action allows registering to various backend event. Use this action to create notifications that will react to events such as new video was uploaded or metadata field was updated. To see the list of available event types, call the listTemplates action
 *
 * Server response type:         KalturaEventNotificationTemplate
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EventNotificationTemplateCloneAction extends KalturaRequest<KalturaEventNotificationTemplate> {

    id : number;
	eventNotificationTemplate : KalturaEventNotificationTemplate;

    constructor(data : EventNotificationTemplateCloneActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEventNotificationTemplate', responseConstructor : KalturaEventNotificationTemplate  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'eventnotification_eventnotificationtemplate' },
				action : { type : 'c', default : 'clone' },
				id : { type : 'n' },
				eventNotificationTemplate : { type : 'o', subTypeConstructor : KalturaEventNotificationTemplate, subType : 'KalturaEventNotificationTemplate' }
            }
        );
        return result;
    }
}

