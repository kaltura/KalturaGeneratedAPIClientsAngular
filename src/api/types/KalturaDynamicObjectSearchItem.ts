
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSearchOperator, KalturaSearchOperatorArgs } from './KalturaSearchOperator';

export interface KalturaDynamicObjectSearchItemArgs  extends KalturaSearchOperatorArgs {
    field? : string;
}


export class KalturaDynamicObjectSearchItem extends KalturaSearchOperator {

    field : string;

    constructor(data? : KalturaDynamicObjectSearchItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDynamicObjectSearchItem' },
				field : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDynamicObjectSearchItem',KalturaDynamicObjectSearchItem);
