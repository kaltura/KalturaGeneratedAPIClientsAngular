
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConversionProfileBaseFilter, KalturaConversionProfileBaseFilterArgs } from './KalturaConversionProfileBaseFilter';

export interface KalturaConversionProfileFilterArgs  extends KalturaConversionProfileBaseFilterArgs {
    
}


export class KalturaConversionProfileFilter extends KalturaConversionProfileBaseFilter {

    

    constructor(data? : KalturaConversionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConversionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConversionProfileFilter',KalturaConversionProfileFilter);
