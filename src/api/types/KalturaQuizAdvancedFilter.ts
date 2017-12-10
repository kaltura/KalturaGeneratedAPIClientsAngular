
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaQuizAdvancedFilterArgs  extends KalturaSearchItemArgs {
    isQuiz? : KalturaNullableBoolean;
}


export class KalturaQuizAdvancedFilter extends KalturaSearchItem {

    isQuiz : KalturaNullableBoolean;

    constructor(data? : KalturaQuizAdvancedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuizAdvancedFilter' },
				isQuiz : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaQuizAdvancedFilter',KalturaQuizAdvancedFilter);
