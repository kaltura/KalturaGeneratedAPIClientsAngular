
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLikeBaseFilter, KalturaLikeBaseFilterArgs } from './KalturaLikeBaseFilter';

export interface KalturaLikeFilterArgs  extends KalturaLikeBaseFilterArgs {
    
}


export class KalturaLikeFilter extends KalturaLikeBaseFilter {

    

    constructor(data? : KalturaLikeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLikeFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLikeFilter',KalturaLikeFilter);
