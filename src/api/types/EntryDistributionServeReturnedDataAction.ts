
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface EntryDistributionServeReturnedDataActionArgs  extends KalturaFileRequestArgs {
    id : number;
	actionType : KalturaDistributionAction;
}

/**
 * Build request payload for service 'entryDistribution' action 'serveReturnedData'.
 *
 * Usage: Serves entry distribution returned data
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class EntryDistributionServeReturnedDataAction extends KalturaFileRequest {

    id : number;
	actionType : KalturaDistributionAction;

    constructor(data : EntryDistributionServeReturnedDataActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_entrydistribution' },
				action : { type : 'c', default : 'serveReturnedData' },
				id : { type : 'n' },
				actionType : { type : 'en', subTypeConstructor : KalturaDistributionAction, subType : 'KalturaDistributionAction' }
            }
        );
        return result;
    }
}

