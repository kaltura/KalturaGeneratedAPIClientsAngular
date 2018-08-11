
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCropDimensionsArgs  extends KalturaObjectBaseArgs {
    left? : number;
	top? : number;
	width? : number;
	height? : number;
}


export class KalturaCropDimensions extends KalturaObjectBase {

    left : number;
	top : number;
	width : number;
	height : number;

    constructor(data? : KalturaCropDimensionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCropDimensions' },
				left : { type : 'n' },
				top : { type : 'n' },
				width : { type : 'n' },
				height : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCropDimensions'] = KalturaCropDimensions;