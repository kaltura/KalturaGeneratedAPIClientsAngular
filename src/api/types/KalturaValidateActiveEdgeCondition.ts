
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaValidateActiveEdgeConditionArgs  extends KalturaConditionArgs {
    edgeServerIds? : string;
}


export class KalturaValidateActiveEdgeCondition extends KalturaCondition {

    edgeServerIds : string;

    constructor(data? : KalturaValidateActiveEdgeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaValidateActiveEdgeCondition' },
				edgeServerIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaValidateActiveEdgeCondition',KalturaValidateActiveEdgeCondition);
