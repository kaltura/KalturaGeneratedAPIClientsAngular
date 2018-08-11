
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchCategoryResponse } from './KalturaESearchCategoryResponse';

import { KalturaESearchCategoryParams } from './KalturaESearchCategoryParams';
import { KalturaPager } from './KalturaPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ESearchSearchCategoryActionArgs  extends KalturaRequestArgs {
    searchParams : KalturaESearchCategoryParams;
	pager? : KalturaPager;
}

/**
 * Build request payload for service 'eSearch' action 'searchCategory'.
 *
 * 
 *
 * Server response type:         KalturaESearchCategoryResponse
 * Server failure response type: KalturaAPIException
 */
export class ESearchSearchCategoryAction extends KalturaRequest<KalturaESearchCategoryResponse> {

    searchParams : KalturaESearchCategoryParams;
	pager : KalturaPager;

    constructor(data : ESearchSearchCategoryActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaESearchCategoryResponse', responseConstructor : KalturaESearchCategoryResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'elasticsearch_esearch' },
				action : { type : 'c', default : 'searchCategory' },
				searchParams : { type : 'o', subTypeConstructor : KalturaESearchCategoryParams, subType : 'KalturaESearchCategoryParams' },
				pager : { type : 'o', subTypeConstructor : KalturaPager, subType : 'KalturaPager' }
            }
        );
        return result;
    }
}

