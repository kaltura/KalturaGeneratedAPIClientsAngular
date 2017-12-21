
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchResponse } from './KalturaESearchResponse';

import { KalturaESearchUserParams } from './KalturaESearchUserParams';
import { KalturaPager } from './KalturaPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ESearchSearchUserActionArgs  extends KalturaRequestArgs {
    searchParams : KalturaESearchUserParams;
	pager? : KalturaPager;
}

/**
 * Build request payload for service 'eSearch' action 'searchUser'.
 *
 * 
 *
 * Server response type:         KalturaESearchResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ESearchSearchUserAction extends KalturaRequest<KalturaESearchResponse> {

    searchParams : KalturaESearchUserParams;
	pager : KalturaPager;

    constructor(data : ESearchSearchUserActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaESearchResponse', responseConstructor : KalturaESearchResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'elasticsearch_esearch' },
				action : { type : 'c', default : 'searchUser' },
				searchParams : { type : 'o', subTypeConstructor : KalturaESearchUserParams, subType : 'KalturaESearchUserParams' },
				pager : { type : 'o', subTypeConstructor : KalturaPager, subType : 'KalturaPager' }
            }
        );
        return result;
    }
}

