
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSearchOperatorType } from './KalturaSearchOperatorType';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaSearchOperatorArgs  extends KalturaSearchItemArgs {
    type? : KalturaSearchOperatorType;
	items? : KalturaSearchItem[];
}


export class KalturaSearchOperator extends KalturaSearchItem {

    type : KalturaSearchOperatorType;
	items : KalturaSearchItem[];

    constructor(data? : KalturaSearchOperatorArgs)
    {
        super(data);
        if (typeof this.items === 'undefined') this.items = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchOperator' },
				type : { type : 'en', subTypeConstructor : KalturaSearchOperatorType, subType : 'KalturaSearchOperatorType' },
				items : { type : 'a', subTypeConstructor : KalturaSearchItem, subType : 'KalturaSearchItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchOperator',KalturaSearchOperator);
