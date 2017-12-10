
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSearchItem } from './KalturaSearchItem';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFilterArgs  extends KalturaObjectBaseArgs {
    orderBy? : string;
	advancedSearch? : KalturaSearchItem;
}


export class KalturaFilter extends KalturaObjectBase {

    orderBy : string;
	advancedSearch : KalturaSearchItem;

    constructor(data? : KalturaFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilter' },
				orderBy : { type : 's' },
				advancedSearch : { type : 'o', subTypeConstructor : KalturaSearchItem, subType : 'KalturaSearchItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilter',KalturaFilter);
