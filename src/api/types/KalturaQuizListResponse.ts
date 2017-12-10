
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaQuiz } from './KalturaQuiz';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaQuizListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaQuizListResponse extends KalturaListResponse {

    readonly objects : KalturaQuiz[];

    constructor(data? : KalturaQuizListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuizListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaQuiz, subType : 'KalturaQuiz' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaQuizListResponse',KalturaQuizListResponse);
