
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	eventNotificationTemplate : KalturaEventNotificationTemplate;
}

/**
 * Build request payload for service 'eventNotificationTemplate' action 'update'.
 *
 * Usage: Update an existing event notification template object
 *
 * Server response type:         KalturaEventNotificationTemplate
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EventNotificationTemplateUpdateAction extends KalturaRequest<KalturaEventNotificationTemplate> {

    id : number;
	eventNotificationTemplate : KalturaEventNotificationTemplate;

    constructor(data : EventNotificationTemplateUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				eventNotificationTemplate : { type : 'o', subTypeConstructor : KalturaEventNotificationTemplate, subType : 'KalturaEventNotificationTemplate' }
            }
        );
        return result;
    }
}

