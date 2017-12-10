
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PollVoteActionArgs  extends KalturaRequestArgs {
    pollId : string;
	userId : string;
	answerIds : string;
}

/**
 * Build request payload for service 'poll' action 'vote'.
 *
 * Usage: Vote Action
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PollVoteAction extends KalturaRequest<string> {

    pollId : string;
	userId : string;
	answerIds : string;

    constructor(data : PollVoteActionArgs)
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
				action : { type : 'c', default : 'vote' },
				pollId : { type : 's' },
				userId : { type : 's' },
				answerIds : { type : 's' }
            }
        );
        return result;
    }
}

