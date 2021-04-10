
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRoomDetailsArgs  extends KalturaObjectBaseArgs {
    serverUrl? : string;
	entryId? : string;
	token? : string;
	expiry? : number;
	serverName? : string;
}


export class KalturaRoomDetails extends KalturaObjectBase {

    serverUrl : string;
	entryId : string;
	token : string;
	expiry : number;
	serverName : string;

    constructor(data? : KalturaRoomDetailsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRoomDetails' },
				serverUrl : { type : 's' },
				entryId : { type : 's' },
				token : { type : 's' },
				expiry : { type : 'n' },
				serverName : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRoomDetails'] = KalturaRoomDetails;