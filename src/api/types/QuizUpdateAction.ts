
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuiz } from './KalturaQuiz';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface QuizUpdateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	quiz : KalturaQuiz;
}

/**
 * Build request payload for service 'quiz' action 'update'.
 *
 * Usage: Allows to update a quiz
 *
 * Server response type:         KalturaQuiz
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class QuizUpdateAction extends KalturaRequest<KalturaQuiz> {

    entryId : string;
	quiz : KalturaQuiz;

    constructor(data : QuizUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				entryId : { type : 's' },
				quiz : { type : 'o', subTypeConstructor : KalturaQuiz, subType : 'KalturaQuiz' }
            }
        );
        return result;
    }
}

