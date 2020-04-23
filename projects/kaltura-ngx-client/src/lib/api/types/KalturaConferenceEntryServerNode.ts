
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConferenceRoomStatus } from './KalturaConferenceRoomStatus';
import { KalturaEntryServerNode, KalturaEntryServerNodeArgs } from './KalturaEntryServerNode';

export interface KalturaConferenceEntryServerNodeArgs  extends KalturaEntryServerNodeArgs {
    
}


export class KalturaConferenceEntryServerNode extends KalturaEntryServerNode {

    readonly confRoomStatus : KalturaConferenceRoomStatus;
	readonly registered : number;

    constructor(data? : KalturaConferenceEntryServerNodeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConferenceEntryServerNode' },
				confRoomStatus : { type : 'en', readOnly : true, subTypeConstructor : KalturaConferenceRoomStatus, subType : 'KalturaConferenceRoomStatus' },
				registered : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaConferenceEntryServerNode'] = KalturaConferenceEntryServerNode;