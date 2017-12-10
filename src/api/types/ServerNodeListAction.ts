
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNodeListResponse } from './KalturaServerNodeListResponse';

import { KalturaServerNodeFilter } from './KalturaServerNodeFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ServerNodeListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaServerNodeFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'serverNode' action 'list'.
 *
 * 
 *
 * Server response type:         KalturaServerNodeListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ServerNodeListAction extends KalturaRequest<KalturaServerNodeListResponse> {

    filter : KalturaServerNodeFilter;
	pager : KalturaFilterPager;

    constructor(data? : ServerNodeListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaServerNodeListResponse', responseConstructor : KalturaServerNodeListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'servernode' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaServerNodeFilter, subType : 'KalturaServerNodeFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

