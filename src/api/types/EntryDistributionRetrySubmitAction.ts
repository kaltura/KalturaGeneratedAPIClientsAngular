
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryDistributionRetrySubmitActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'entryDistribution' action 'retrySubmit'.
 *
 * Usage: Retries last submit action
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntryDistributionRetrySubmitAction extends KalturaRequest<KalturaEntryDistribution> {

    id : number;

    constructor(data : EntryDistributionRetrySubmitActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEntryDistribution', responseConstructor : KalturaEntryDistribution  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_entrydistribution' },
				action : { type : 'c', default : 'retrySubmit' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

