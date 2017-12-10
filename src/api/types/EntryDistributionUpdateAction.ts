
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryDistributionUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	entryDistribution : KalturaEntryDistribution;
}

/**
 * Build request payload for service 'entryDistribution' action 'update'.
 *
 * Usage: Update Entry Distribution by id
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntryDistributionUpdateAction extends KalturaRequest<KalturaEntryDistribution> {

    id : number;
	entryDistribution : KalturaEntryDistribution;

    constructor(data : EntryDistributionUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				entryDistribution : { type : 'o', subTypeConstructor : KalturaEntryDistribution, subType : 'KalturaEntryDistribution' }
            }
        );
        return result;
    }
}

