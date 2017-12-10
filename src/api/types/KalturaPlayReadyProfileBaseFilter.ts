
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmProfileFilter, KalturaDrmProfileFilterArgs } from './KalturaDrmProfileFilter';

export interface KalturaPlayReadyProfileBaseFilterArgs  extends KalturaDrmProfileFilterArgs {
    
}


export class KalturaPlayReadyProfileBaseFilter extends KalturaDrmProfileFilter {

    

    constructor(data? : KalturaPlayReadyProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyProfileBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayReadyProfileBaseFilter',KalturaPlayReadyProfileBaseFilter);
