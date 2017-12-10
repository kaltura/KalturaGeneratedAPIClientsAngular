
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlaylistCompareAttribute } from './KalturaPlaylistCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';

export interface KalturaPlaylistCompareAttributeConditionArgs  extends KalturaSearchComparableAttributeConditionArgs {
    attribute? : KalturaPlaylistCompareAttribute;
}


export class KalturaPlaylistCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {

    attribute : KalturaPlaylistCompareAttribute;

    constructor(data? : KalturaPlaylistCompareAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaylistCompareAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaPlaylistCompareAttribute, subType : 'KalturaPlaylistCompareAttribute' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlaylistCompareAttributeCondition',KalturaPlaylistCompareAttributeCondition);
