
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateAddActionArgs  extends KalturaRequestArgs {
    eventNotificationTemplate : KalturaEventNotificationTemplate;
}

/**
 * Build request payload for service 'eventNotificationTemplate' action 'add'.
 *
 * Usage: This action allows for the creation of new backend event types in the system. This action requires access to the Kaltura server Admin Console. If you're looking to register to existing event types, please use the clone action instead
 *
 * Server response type:         KalturaEventNotificationTemplate
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EventNotificationTemplateAddAction extends KalturaRequest<KalturaEventNotificationTemplate> {

    eventNotificationTemplate : KalturaEventNotificationTemplate;

    constructor(data : EventNotificationTemplateAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				eventNotificationTemplate : { type : 'o', subTypeConstructor : KalturaEventNotificationTemplate, subType : 'KalturaEventNotificationTemplate' }
            }
        );
        return result;
    }
}

