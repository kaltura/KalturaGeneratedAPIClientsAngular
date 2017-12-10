
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnotationGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'annotation' action 'get'.
 *
 * Usage: Retrieve an CuePoint object by id
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AnnotationGetAction extends KalturaRequest<KalturaCuePoint> {

    id : string;

    constructor(data : AnnotationGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCuePoint', responseConstructor : KalturaCuePoint  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'annotation_annotation' },
				action : { type : 'c', default : 'get' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

