
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaResponseProfileBaseFilter, KalturaResponseProfileBaseFilterArgs } from './KalturaResponseProfileBaseFilter';

export interface KalturaResponseProfileFilterArgs  extends KalturaResponseProfileBaseFilterArgs {
    
}


export class KalturaResponseProfileFilter extends KalturaResponseProfileBaseFilter {

    

    constructor(data? : KalturaResponseProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaResponseProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaResponseProfileFilter',KalturaResponseProfileFilter);
