
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAccessControlBaseFilter, KalturaAccessControlBaseFilterArgs } from './KalturaAccessControlBaseFilter';

export interface KalturaAccessControlFilterArgs  extends KalturaAccessControlBaseFilterArgs {
    
}


export class KalturaAccessControlFilter extends KalturaAccessControlBaseFilter {

    

    constructor(data? : KalturaAccessControlFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAccessControlFilter',KalturaAccessControlFilter);
