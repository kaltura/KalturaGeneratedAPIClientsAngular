
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface EntryDistributionServeSentDataActionArgs  extends KalturaFileRequestArgs {
    id : number;
	actionType : KalturaDistributionAction;
}

/**
 * Build request payload for service 'entryDistribution' action 'serveSentData'.
 *
 * Usage: Serves entry distribution sent data
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class EntryDistributionServeSentDataAction extends KalturaFileRequest {

    id : number;
	actionType : KalturaDistributionAction;

    constructor(data : EntryDistributionServeSentDataActionArgs)
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
				action : { type : 'c', default : 'serveSentData' },
				id : { type : 'n' },
				actionType : { type : 'en', subTypeConstructor : KalturaDistributionAction, subType : 'KalturaDistributionAction' }
            }
        );
        return result;
    }
}

