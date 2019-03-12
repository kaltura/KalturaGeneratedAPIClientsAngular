
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchGroupResponse } from './KalturaESearchGroupResponse';

import { KalturaESearchGroupParams } from './KalturaESearchGroupParams';
import { KalturaPager } from './KalturaPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ESearchSearchGroupActionArgs  extends KalturaRequestArgs {
    searchParams : KalturaESearchGroupParams;
	pager? : KalturaPager;
}

/**
 * Build request payload for service 'eSearch' action 'searchGroup'.
 *
 * 
 *
 * Server response type:         KalturaESearchGroupResponse
 * Server failure response type: KalturaAPIException
 */
export class ESearchSearchGroupAction extends KalturaRequest<KalturaESearchGroupResponse> {

    searchParams : KalturaESearchGroupParams;
	pager : KalturaPager;

    constructor(data : ESearchSearchGroupActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaESearchGroupResponse', responseConstructor : KalturaESearchGroupResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'elasticsearch_esearch' },
				action : { type : 'c', default : 'searchGroup' },
				searchParams : { type : 'o', subTypeConstructor : KalturaESearchGroupParams, subType : 'KalturaESearchGroupParams' },
				pager : { type : 'o', subTypeConstructor : KalturaPager, subType : 'KalturaPager' }
            }
        );
        return result;
    }
}

