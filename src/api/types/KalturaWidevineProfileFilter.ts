
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaWidevineProfileBaseFilter, KalturaWidevineProfileBaseFilterArgs } from './KalturaWidevineProfileBaseFilter';

export interface KalturaWidevineProfileFilterArgs  extends KalturaWidevineProfileBaseFilterArgs {
    
}


export class KalturaWidevineProfileFilter extends KalturaWidevineProfileBaseFilter {

    

    constructor(data? : KalturaWidevineProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidevineProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWidevineProfileFilter',KalturaWidevineProfileFilter);
