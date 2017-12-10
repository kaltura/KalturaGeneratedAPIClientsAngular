
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseEntryFilter, KalturaBaseEntryFilterArgs } from './KalturaBaseEntryFilter';

export interface KalturaPlaylistBaseFilterArgs  extends KalturaBaseEntryFilterArgs {
    
}


export class KalturaPlaylistBaseFilter extends KalturaBaseEntryFilter {

    

    constructor(data? : KalturaPlaylistBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaylistBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlaylistBaseFilter',KalturaPlaylistBaseFilter);
