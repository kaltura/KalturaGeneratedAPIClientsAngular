
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaQuizOutputType } from './KalturaQuizOutputType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface QuizGetUrlActionArgs  extends KalturaRequestArgs {
    entryId : string;
	quizOutputType : KalturaQuizOutputType;
}

/**
 * Build request payload for service 'quiz' action 'getUrl'.
 *
 * Usage: sends a with an api request for pdf from quiz object
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class QuizGetUrlAction extends KalturaRequest<string> {

    entryId : string;
	quizOutputType : KalturaQuizOutputType;

    constructor(data : QuizGetUrlActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'quiz_quiz' },
				action : { type : 'c', default : 'getUrl' },
				entryId : { type : 's' },
				quizOutputType : { type : 'en', subTypeConstructor : KalturaQuizOutputType, subType : 'KalturaQuizOutputType' }
            }
        );
        return result;
    }
}

