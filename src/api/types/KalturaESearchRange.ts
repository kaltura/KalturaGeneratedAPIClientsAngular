
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchRangeArgs  extends KalturaObjectBaseArgs {
    greaterThanOrEqual? : number;
	lessThanOrEqual? : number;
	greaterThan? : number;
	lessThan? : number;
}


export class KalturaESearchRange extends KalturaObjectBase {

    greaterThanOrEqual : number;
	lessThanOrEqual : number;
	greaterThan : number;
	lessThan : number;

    constructor(data? : KalturaESearchRangeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchRange' },
				greaterThanOrEqual : { type : 'n' },
				lessThanOrEqual : { type : 'n' },
				greaterThan : { type : 'n' },
				lessThan : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchRange',KalturaESearchRange);
