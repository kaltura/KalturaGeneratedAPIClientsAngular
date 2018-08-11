
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryUserBaseFilter, KalturaCategoryUserBaseFilterArgs } from './KalturaCategoryUserBaseFilter';

export interface KalturaCategoryUserFilterArgs  extends KalturaCategoryUserBaseFilterArgs {
    categoryDirectMembers? : boolean;
	freeText? : string;
	relatedGroupsByUserId? : string;
}


export class KalturaCategoryUserFilter extends KalturaCategoryUserBaseFilter {

    categoryDirectMembers : boolean;
	freeText : string;
	relatedGroupsByUserId : string;

    constructor(data? : KalturaCategoryUserFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryUserFilter' },
				categoryDirectMembers : { type : 'b' },
				freeText : { type : 's' },
				relatedGroupsByUserId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCategoryUserFilter'] = KalturaCategoryUserFilter;