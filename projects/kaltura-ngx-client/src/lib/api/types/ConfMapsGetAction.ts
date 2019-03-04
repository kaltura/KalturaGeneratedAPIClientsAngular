
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfMaps } from './KalturaConfMaps';

import { KalturaConfMapsFilter } from './KalturaConfMapsFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfMapsGetActionArgs  extends KalturaRequestArgs {
    filter : KalturaConfMapsFilter;
}

/**
 * Build request payload for service 'confMaps' action 'get'.
 *
 * Usage: Get configuration map
 *
 * Server response type:         KalturaConfMaps
 * Server failure response type: KalturaAPIException
 */
export class ConfMapsGetAction extends KalturaRequest<KalturaConfMaps> {

    filter : KalturaConfMapsFilter;

    constructor(data : ConfMapsGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConfMaps', responseConstructor : KalturaConfMaps  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'confmaps_confmaps' },
				action : { type : 'c', default : 'get' },
				filter : { type : 'o', subTypeConstructor : KalturaConfMapsFilter, subType : 'KalturaConfMapsFilter' }
            }
        );
        return result;
    }
}

