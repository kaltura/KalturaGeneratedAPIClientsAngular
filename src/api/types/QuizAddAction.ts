
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuiz } from './KalturaQuiz';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface QuizAddActionArgs  extends KalturaRequestArgs {
    entryId : string;
	quiz : KalturaQuiz;
}

/**
 * Build request payload for service 'quiz' action 'add'.
 *
 * Usage: Allows to add a quiz to an entry
 *
 * Server response type:         KalturaQuiz
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class QuizAddAction extends KalturaRequest<KalturaQuiz> {

    entryId : string;
	quiz : KalturaQuiz;

    constructor(data : QuizAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				entryId : { type : 's' },
				quiz : { type : 'o', subTypeConstructor : KalturaQuiz, subType : 'KalturaQuiz' }
            }
        );
        return result;
    }
}

