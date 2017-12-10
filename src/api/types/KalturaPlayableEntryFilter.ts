
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlayableEntryBaseFilter, KalturaPlayableEntryBaseFilterArgs } from './KalturaPlayableEntryBaseFilter';

export interface KalturaPlayableEntryFilterArgs  extends KalturaPlayableEntryBaseFilterArgs {
    
}


export class KalturaPlayableEntryFilter extends KalturaPlayableEntryBaseFilter {

    

    constructor(data? : KalturaPlayableEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayableEntryFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayableEntryFilter',KalturaPlayableEntryFilter);
