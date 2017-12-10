
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveStreamEntry, KalturaLiveStreamEntryArgs } from './KalturaLiveStreamEntry';

export interface KalturaLiveStreamAdminEntryArgs  extends KalturaLiveStreamEntryArgs {
    
}


export class KalturaLiveStreamAdminEntry extends KalturaLiveStreamEntry {

    

    constructor(data? : KalturaLiveStreamAdminEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamAdminEntry' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStreamAdminEntry',KalturaLiveStreamAdminEntry);
