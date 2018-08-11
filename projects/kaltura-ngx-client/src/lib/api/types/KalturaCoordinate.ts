
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCoordinateArgs  extends KalturaObjectBaseArgs {
    latitude? : number;
	longitude? : number;
	name? : string;
}


export class KalturaCoordinate extends KalturaObjectBase {

    latitude : number;
	longitude : number;
	name : string;

    constructor(data? : KalturaCoordinateArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCoordinate' },
				latitude : { type : 'n' },
				longitude : { type : 'n' },
				name : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCoordinate'] = KalturaCoordinate;