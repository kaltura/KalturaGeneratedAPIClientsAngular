
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateListResponse } from './KalturaEventNotificationTemplateListResponse';

import { KalturaEventNotificationTemplateFilter } from './KalturaEventNotificationTemplateFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateListTemplatesActionArgs  extends KalturaRequestArgs {
    filter? : KalturaEventNotificationTemplateFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'eventNotificationTemplate' action 'listTemplates'.
 *
 * Usage: Action lists the template partner event notification templates
 *
 * Server response type:         KalturaEventNotificationTemplateListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EventNotificationTemplateListTemplatesAction extends KalturaRequest<KalturaEventNotificationTemplateListResponse> {

    filter : KalturaEventNotificationTemplateFilter;
	pager : KalturaFilterPager;

    constructor(data? : EventNotificationTemplateListTemplatesActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEventNotificationTemplateListResponse', responseConstructor : KalturaEventNotificationTemplateListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'eventnotification_eventnotificationtemplate' },
				action : { type : 'c', default : 'listTemplates' },
				filter : { type : 'o', subTypeConstructor : KalturaEventNotificationTemplateFilter, subType : 'KalturaEventNotificationTemplateFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

