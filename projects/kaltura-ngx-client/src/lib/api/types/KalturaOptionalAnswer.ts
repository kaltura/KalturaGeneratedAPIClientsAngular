
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaOptionalAnswerArgs  extends KalturaObjectBaseArgs {
    key? : string;
	text? : string;
	weight? : number;
	isCorrect? : KalturaNullableBoolean;
}


export class KalturaOptionalAnswer extends KalturaObjectBase {

    key : string;
	text : string;
	weight : number;
	isCorrect : KalturaNullableBoolean;

    constructor(data? : KalturaOptionalAnswerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOptionalAnswer' },
				key : { type : 's' },
				text : { type : 's' },
				weight : { type : 'n' },
				isCorrect : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaOptionalAnswer'] = KalturaOptionalAnswer;