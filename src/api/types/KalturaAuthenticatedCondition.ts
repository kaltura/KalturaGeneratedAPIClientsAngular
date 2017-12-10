
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaAuthenticatedConditionArgs  extends KalturaConditionArgs {
    privileges? : KalturaStringValue[];
}


export class KalturaAuthenticatedCondition extends KalturaCondition {

    privileges : KalturaStringValue[];

    constructor(data? : KalturaAuthenticatedConditionArgs)
    {
        super(data);
        if (typeof this.privileges === 'undefined') this.privileges = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAuthenticatedCondition' },
				privileges : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAuthenticatedCondition',KalturaAuthenticatedCondition);
