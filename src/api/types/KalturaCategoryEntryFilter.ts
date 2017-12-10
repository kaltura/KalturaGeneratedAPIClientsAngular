
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryEntryBaseFilter, KalturaCategoryEntryBaseFilterArgs } from './KalturaCategoryEntryBaseFilter';

export interface KalturaCategoryEntryFilterArgs  extends KalturaCategoryEntryBaseFilterArgs {
    
}


export class KalturaCategoryEntryFilter extends KalturaCategoryEntryBaseFilter {

    

    constructor(data? : KalturaCategoryEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryEntryFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryEntryFilter',KalturaCategoryEntryFilter);
