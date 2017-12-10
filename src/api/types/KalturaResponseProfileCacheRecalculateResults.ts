
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaResponseProfileCacheRecalculateResultsArgs  extends KalturaObjectBaseArgs {
    lastObjectKey? : string;
	recalculated? : number;
}


export class KalturaResponseProfileCacheRecalculateResults extends KalturaObjectBase {

    lastObjectKey : string;
	recalculated : number;

    constructor(data? : KalturaResponseProfileCacheRecalculateResultsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaResponseProfileCacheRecalculateResults' },
				lastObjectKey : { type : 's' },
				recalculated : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaResponseProfileCacheRecalculateResults',KalturaResponseProfileCacheRecalculateResults);
