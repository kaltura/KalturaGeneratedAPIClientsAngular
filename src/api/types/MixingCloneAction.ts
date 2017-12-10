
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntry } from './KalturaMixEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MixingCloneActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'mixing' action 'clone'.
 *
 * Usage: Clones an existing mix
 *
 * Server response type:         KalturaMixEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MixingCloneAction extends KalturaRequest<KalturaMixEntry> {

    entryId : string;

    constructor(data : MixingCloneActionArgs)
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
				action : { type : 'c', default : 'clone' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

