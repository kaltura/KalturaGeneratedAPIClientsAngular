
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAnnotation } from './KalturaAnnotation';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnotationCloneActionArgs  extends KalturaRequestArgs {
    id : string;
	entryId : string;
	parentId? : string;
}

/**
 * Build request payload for service 'annotation' action 'clone'.
 *
 * Usage: Clone cuePoint with id to given entry
 *
 * Server response type:         KalturaAnnotation
 * Server failure response type: KalturaAPIException
 */
export class AnnotationCloneAction extends KalturaRequest<KalturaAnnotation> {

    id : string;
	entryId : string;
	parentId : string;

    constructor(data : AnnotationCloneActionArgs)
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
				action : { type : 'c', default : 'clone' },
				id : { type : 's' },
				entryId : { type : 's' },
				parentId : { type : 's' }
            }
        );
        return result;
    }
}

