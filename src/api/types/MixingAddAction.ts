
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntry } from './KalturaMixEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MixingAddActionArgs  extends KalturaRequestArgs {
    mixEntry : KalturaMixEntry;
}

/**
 * Build request payload for service 'mixing' action 'add'.
 *
 * Usage: Adds a new mix.
 * If the dataContent is null, a default timeline will be created
 *
 * Server response type:         KalturaMixEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MixingAddAction extends KalturaRequest<KalturaMixEntry> {

    mixEntry : KalturaMixEntry;

    constructor(data : MixingAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMixEntry', responseConstructor : KalturaMixEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'mixing' },
				action : { type : 'c', default : 'add' },
				mixEntry : { type : 'o', subTypeConstructor : KalturaMixEntry, subType : 'KalturaMixEntry' }
            }
        );
        return result;
    }
}

