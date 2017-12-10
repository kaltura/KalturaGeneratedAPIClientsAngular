
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAnnotation } from './KalturaAnnotation';

import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnotationAddActionArgs  extends KalturaRequestArgs {
    annotation : KalturaCuePoint;
}

/**
 * Build request payload for service 'annotation' action 'add'.
 *
 * Usage: Allows you to add an annotation object associated with an entry
 *
 * Server response type:         KalturaAnnotation
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AnnotationAddAction extends KalturaRequest<KalturaAnnotation> {

    annotation : KalturaCuePoint;

    constructor(data : AnnotationAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAnnotation', responseConstructor : KalturaAnnotation  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'annotation_annotation' },
				action : { type : 'c', default : 'add' },
				annotation : { type : 'o', subTypeConstructor : KalturaCuePoint, subType : 'KalturaCuePoint' }
            }
        );
        return result;
    }
}

