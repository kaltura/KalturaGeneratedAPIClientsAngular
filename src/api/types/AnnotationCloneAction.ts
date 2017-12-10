
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnotationCloneActionArgs  extends KalturaRequestArgs {
    id : string;
	entryId : string;
}

/**
 * Build request payload for service 'annotation' action 'clone'.
 *
 * Usage: Clone cuePoint with id to given entry
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AnnotationCloneAction extends KalturaRequest<KalturaCuePoint> {

    id : string;
	entryId : string;

    constructor(data : AnnotationCloneActionArgs)
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
				action : { type : 'c', default : 'clone' },
				id : { type : 's' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

