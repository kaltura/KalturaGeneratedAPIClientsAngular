
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidget } from './KalturaWidget';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WidgetUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	widget : KalturaWidget;
}

/**
 * Build request payload for service 'widget' action 'update'.
 *
 * Usage: Update exisiting widget
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class WidgetUpdateAction extends KalturaRequest<KalturaWidget> {

    id : string;
	widget : KalturaWidget;

    constructor(data : WidgetUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaWidget', responseConstructor : KalturaWidget  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'widget' },
				action : { type : 'c', default : 'update' },
				id : { type : 's' },
				widget : { type : 'o', subTypeConstructor : KalturaWidget, subType : 'KalturaWidget' }
            }
        );
        return result;
    }
}

