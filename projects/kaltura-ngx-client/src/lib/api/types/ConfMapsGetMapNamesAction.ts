
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfMapsGetMapNamesActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'confMaps' action 'getMapNames'.
 *
 * Usage: List configuration maps names
 *
 * Server response type:         KalturaString[]
 * Server failure response type: KalturaAPIException
 */
export class ConfMapsGetMapNamesAction extends KalturaRequest<KalturaString[]> {

    

    constructor(data? : ConfMapsGetMapNamesActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaString', responseConstructor : KalturaString  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'confmaps_confmaps' },
				action : { type : 'c', default : 'getMapNames' }
            }
        );
        return result;
    }
}

