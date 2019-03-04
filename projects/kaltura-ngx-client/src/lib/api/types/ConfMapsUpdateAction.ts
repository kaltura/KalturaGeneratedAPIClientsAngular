
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfMaps } from './KalturaConfMaps';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfMapsUpdateActionArgs  extends KalturaRequestArgs {
    map : KalturaConfMaps;
}

/**
 * Build request payload for service 'confMaps' action 'update'.
 *
 * Usage: Update configuration map
 *
 * Server response type:         KalturaConfMaps
 * Server failure response type: KalturaAPIException
 */
export class ConfMapsUpdateAction extends KalturaRequest<KalturaConfMaps> {

    map : KalturaConfMaps;

    constructor(data : ConfMapsUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				map : { type : 'o', subTypeConstructor : KalturaConfMaps, subType : 'KalturaConfMaps' }
            }
        );
        return result;
    }
}

