
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlayReadyProfileBaseFilter, KalturaPlayReadyProfileBaseFilterArgs } from './KalturaPlayReadyProfileBaseFilter';

export interface KalturaPlayReadyProfileFilterArgs  extends KalturaPlayReadyProfileBaseFilterArgs {
    
}


export class KalturaPlayReadyProfileFilter extends KalturaPlayReadyProfileBaseFilter {

    

    constructor(data? : KalturaPlayReadyProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayReadyProfileFilter',KalturaPlayReadyProfileFilter);
