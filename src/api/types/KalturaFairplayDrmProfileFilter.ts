
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFairplayDrmProfileBaseFilter, KalturaFairplayDrmProfileBaseFilterArgs } from './KalturaFairplayDrmProfileBaseFilter';

export interface KalturaFairplayDrmProfileFilterArgs  extends KalturaFairplayDrmProfileBaseFilterArgs {
    
}


export class KalturaFairplayDrmProfileFilter extends KalturaFairplayDrmProfileBaseFilter {

    

    constructor(data? : KalturaFairplayDrmProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFairplayDrmProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFairplayDrmProfileFilter',KalturaFairplayDrmProfileFilter);
