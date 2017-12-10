
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuiz } from './KalturaQuiz';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface QuizGetActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'quiz' action 'get'.
 *
 * Usage: Allows to get a quiz
 *
 * Server response type:         KalturaQuiz
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class QuizGetAction extends KalturaRequest<KalturaQuiz> {

    entryId : string;

    constructor(data : QuizGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaQuiz', responseConstructor : KalturaQuiz  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'quiz_quiz' },
				action : { type : 'c', default : 'get' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

