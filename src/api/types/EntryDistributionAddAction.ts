
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryDistributionAddActionArgs  extends KalturaRequestArgs {
    entryDistribution : KalturaEntryDistribution;
}

/**
 * Build request payload for service 'entryDistribution' action 'add'.
 *
 * Usage: Add new Entry Distribution
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntryDistributionAddAction extends KalturaRequest<KalturaEntryDistribution> {

    entryDistribution : KalturaEntryDistribution;

    constructor(data : EntryDistributionAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				entryDistribution : { type : 'o', subTypeConstructor : KalturaEntryDistribution, subType : 'KalturaEntryDistribution' }
            }
        );
        return result;
    }
}

