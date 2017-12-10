
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidget } from './KalturaWidget';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WidgetGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'widget' action 'get'.
 *
 * Usage: Get widget by id
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class WidgetGetAction extends KalturaRequest<KalturaWidget> {

    id : string;

    constructor(data : WidgetGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

