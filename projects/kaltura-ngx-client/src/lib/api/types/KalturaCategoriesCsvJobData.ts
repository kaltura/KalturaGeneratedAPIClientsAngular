
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryFilter } from './KalturaCategoryFilter';
import { KalturaMappedObjectsCsvJobData, KalturaMappedObjectsCsvJobDataArgs } from './KalturaMappedObjectsCsvJobData';

export interface KalturaCategoriesCsvJobDataArgs  extends KalturaMappedObjectsCsvJobDataArgs {
    filter? : KalturaCategoryFilter;
}


export class KalturaCategoriesCsvJobData extends KalturaMappedObjectsCsvJobData {

    filter : KalturaCategoryFilter;

    constructor(data? : KalturaCategoriesCsvJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoriesCsvJobData' },
				filter : { type : 'o', subTypeConstructor : KalturaCategoryFilter, subType : 'KalturaCategoryFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCategoriesCsvJobData'] = KalturaCategoriesCsvJobData;