
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserEntry, KalturaUserEntryArgs } from './KalturaUserEntry';

export interface KalturaWatchLaterUserEntryArgs  extends KalturaUserEntryArgs {
    
}


export class KalturaWatchLaterUserEntry extends KalturaUserEntry {

    

    constructor(data? : KalturaWatchLaterUserEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWatchLaterUserEntry' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWatchLaterUserEntry'] = KalturaWatchLaterUserEntry;