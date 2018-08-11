
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaCuePointFilter } from './KalturaCuePointFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface AnnotationServeBulkActionArgs  extends KalturaFileRequestArgs {
    filter? : KalturaCuePointFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'annotation' action 'serveBulk'.
 *
 * Usage: Download multiple cue points objects as XML definitions
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class AnnotationServeBulkAction extends KalturaFileRequest {

    filter : KalturaCuePointFilter;
	pager : KalturaFilterPager;

    constructor(data? : AnnotationServeBulkActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'annotation_annotation' },
				action : { type : 'c', default : 'serveBulk' },
				filter : { type : 'o', subTypeConstructor : KalturaCuePointFilter, subType : 'KalturaCuePointFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

