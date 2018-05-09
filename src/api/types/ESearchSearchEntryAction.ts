
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchEntryResponse } from './KalturaESearchEntryResponse';

import { KalturaESearchEntryParams } from './KalturaESearchEntryParams';
import { KalturaPager } from './KalturaPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ESearchSearchEntryActionArgs  extends KalturaRequestArgs {
    searchParams : KalturaESearchEntryParams;
	pager? : KalturaPager;
}

/**
 * Build request payload for service 'eSearch' action 'searchEntry'.
 *
 * 
 *
 * Server response type:         KalturaESearchEntryResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ESearchSearchEntryAction extends KalturaRequest<KalturaESearchEntryResponse> {

    searchParams : KalturaESearchEntryParams;
	pager : KalturaPager;

    constructor(data : ESearchSearchEntryActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaESearchEntryResponse', responseConstructor : KalturaESearchEntryResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'elasticsearch_esearch' },
				action : { type : 'c', default : 'searchEntry' },
				searchParams : { type : 'o', subTypeConstructor : KalturaESearchEntryParams, subType : 'KalturaESearchEntryParams' },
				pager : { type : 'o', subTypeConstructor : KalturaPager, subType : 'KalturaPager' }
            }
        );
        return result;
    }
}

