
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaResponseProfileMappingArgs  extends KalturaObjectBaseArgs {
    parentProperty? : string;
	filterProperty? : string;
	allowNull? : boolean;
}


export class KalturaResponseProfileMapping extends KalturaObjectBase {

    parentProperty : string;
	filterProperty : string;
	allowNull : boolean;

    constructor(data? : KalturaResponseProfileMappingArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaResponseProfileMapping' },
				parentProperty : { type : 's' },
				filterProperty : { type : 's' },
				allowNull : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaResponseProfileMapping',KalturaResponseProfileMapping);
