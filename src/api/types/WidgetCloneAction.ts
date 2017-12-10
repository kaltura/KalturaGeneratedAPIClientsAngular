
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidget } from './KalturaWidget';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WidgetCloneActionArgs  extends KalturaRequestArgs {
    widget : KalturaWidget;
}

/**
 * Build request payload for service 'widget' action 'clone'.
 *
 * Usage: Add widget based on existing widget.
 * Must provide valid sourceWidgetId
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class WidgetCloneAction extends KalturaRequest<KalturaWidget> {

    widget : KalturaWidget;

    constructor(data : WidgetCloneActionArgs)
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
				action : { type : 'c', default : 'clone' },
				widget : { type : 'o', subTypeConstructor : KalturaWidget, subType : 'KalturaWidget' }
            }
        );
        return result;
    }
}

