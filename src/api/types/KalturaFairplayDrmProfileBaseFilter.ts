
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmProfileFilter, KalturaDrmProfileFilterArgs } from './KalturaDrmProfileFilter';

export interface KalturaFairplayDrmProfileBaseFilterArgs  extends KalturaDrmProfileFilterArgs {
    
}


export class KalturaFairplayDrmProfileBaseFilter extends KalturaDrmProfileFilter {

    

    constructor(data? : KalturaFairplayDrmProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFairplayDrmProfileBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFairplayDrmProfileBaseFilter',KalturaFairplayDrmProfileBaseFilter);
