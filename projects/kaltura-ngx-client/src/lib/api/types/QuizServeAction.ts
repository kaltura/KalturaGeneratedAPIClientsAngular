
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaQuizOutputType } from './KalturaQuizOutputType';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface QuizServeActionArgs  extends KalturaFileRequestArgs {
    entryId : string;
	quizOutputType : KalturaQuizOutputType;
}

/**
 * Build request payload for service 'quiz' action 'serve'.
 *
 * Usage: creates a pdf from quiz object
 * The Output type defines the file format in which the quiz will be generated
 * Currently only PDF files are supported
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class QuizServeAction extends KalturaFileRequest {

    entryId : string;
	quizOutputType : KalturaQuizOutputType;

    constructor(data : QuizServeActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'quiz_quiz' },
				action : { type : 'c', default : 'serve' },
				entryId : { type : 's' },
				quizOutputType : { type : 'en', subTypeConstructor : KalturaQuizOutputType, subType : 'KalturaQuizOutputType' }
            }
        );
        return result;
    }
}

