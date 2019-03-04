
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfMapsListResponse } from './KalturaConfMapsListResponse';

import { KalturaConfMapsFilter } from './KalturaConfMapsFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfMapsListActionArgs  extends KalturaRequestArgs {
    filter : KalturaConfMapsFilter;
}

/**
 * Build request payload for service 'confMaps' action 'list'.
 *
 * Usage: List configuration maps
 *
 * Server response type:         KalturaConfMapsListResponse
 * Server failure response type: KalturaAPIException
 */
export class ConfMapsListAction extends KalturaRequest<KalturaConfMapsListResponse> {

    filter : KalturaConfMapsFilter;

    constructor(data : ConfMapsListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConfMapsListResponse', responseConstructor : KalturaConfMapsListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'confmaps_confmaps' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaConfMapsFilter, subType : 'KalturaConfMapsFilter' }
            }
        );
        return result;
    }
}

