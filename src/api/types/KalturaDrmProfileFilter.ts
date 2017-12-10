
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmProfileBaseFilter, KalturaDrmProfileBaseFilterArgs } from './KalturaDrmProfileBaseFilter';

export interface KalturaDrmProfileFilterArgs  extends KalturaDrmProfileBaseFilterArgs {
    
}


export class KalturaDrmProfileFilter extends KalturaDrmProfileBaseFilter {

    

    constructor(data? : KalturaDrmProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDrmProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDrmProfileFilter',KalturaDrmProfileFilter);
