
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfMaps } from './KalturaConfMaps';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfMapsAddActionArgs  extends KalturaRequestArgs {
    map : KalturaConfMaps;
}

/**
 * Build request payload for service 'confMaps' action 'add'.
 *
 * Usage: Add configuration map
 *
 * Server response type:         KalturaConfMaps
 * Server failure response type: KalturaAPIException
 */
export class ConfMapsAddAction extends KalturaRequest<KalturaConfMaps> {

    map : KalturaConfMaps;

    constructor(data : ConfMapsAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				map : { type : 'o', subTypeConstructor : KalturaConfMaps, subType : 'KalturaConfMaps' }
            }
        );
        return result;
    }
}

