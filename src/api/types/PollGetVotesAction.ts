
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PollGetVotesActionArgs  extends KalturaRequestArgs {
    pollId : string;
	answerIds : string;
}

/**
 * Build request payload for service 'poll' action 'getVotes'.
 *
 * Usage: Get Votes Action
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PollGetVotesAction extends KalturaRequest<string> {

    pollId : string;
	answerIds : string;

    constructor(data : PollGetVotesActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'poll_poll' },
				action : { type : 'c', default : 'getVotes' },
				pollId : { type : 's' },
				answerIds : { type : 's' }
            }
        );
        return result;
    }
}

