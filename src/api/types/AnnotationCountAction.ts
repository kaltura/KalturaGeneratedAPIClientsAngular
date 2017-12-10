
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaCuePointFilter } from './KalturaCuePointFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnotationCountActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCuePointFilter;
}

/**
 * Build request payload for service 'annotation' action 'count'.
 *
 * Usage: count cue point objects by filter
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AnnotationCountAction extends KalturaRequest<number> {

    filter : KalturaCuePointFilter;

    constructor(data? : AnnotationCountActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'annotation_annotation' },
				action : { type : 'c', default : 'count' },
				filter : { type : 'o', subTypeConstructor : KalturaCuePointFilter, subType : 'KalturaCuePointFilter' }
            }
        );
        return result;
    }
}

