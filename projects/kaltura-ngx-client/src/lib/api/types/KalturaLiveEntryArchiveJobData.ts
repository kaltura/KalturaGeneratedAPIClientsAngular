
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaLiveEntryArchiveJobDataArgs  extends KalturaJobDataArgs {
    liveEntryId? : string;
}


export class KalturaLiveEntryArchiveJobData extends KalturaJobData {

    liveEntryId : string;

    constructor(data? : KalturaLiveEntryArchiveJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryArchiveJobData' },
				liveEntryId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveEntryArchiveJobData'] = KalturaLiveEntryArchiveJobData;