
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaTrackEntryEventType } from './KalturaTrackEntryEventType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTrackEntryArgs  extends KalturaObjectBaseArgs {
    id? : number;
	trackEventType? : KalturaTrackEntryEventType;
	psVersion? : string;
	context? : string;
	partnerId? : number;
	entryId? : string;
	hostName? : string;
	userId? : string;
	changedProperties? : string;
	paramStr1? : string;
	paramStr2? : string;
	paramStr3? : string;
	ks? : string;
	description? : string;
	createdAt? : Date;
	updatedAt? : Date;
	userIp? : string;
}


export class KalturaTrackEntry extends KalturaObjectBase {

    id : number;
	trackEventType : KalturaTrackEntryEventType;
	psVersion : string;
	context : string;
	partnerId : number;
	entryId : string;
	hostName : string;
	userId : string;
	changedProperties : string;
	paramStr1 : string;
	paramStr2 : string;
	paramStr3 : string;
	ks : string;
	description : string;
	createdAt : Date;
	updatedAt : Date;
	userIp : string;

    constructor(data? : KalturaTrackEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTrackEntry' },
				id : { type : 'n' },
				trackEventType : { type : 'en', subTypeConstructor : KalturaTrackEntryEventType, subType : 'KalturaTrackEntryEventType' },
				psVersion : { type : 's' },
				context : { type : 's' },
				partnerId : { type : 'n' },
				entryId : { type : 's' },
				hostName : { type : 's' },
				userId : { type : 's' },
				changedProperties : { type : 's' },
				paramStr1 : { type : 's' },
				paramStr2 : { type : 's' },
				paramStr3 : { type : 's' },
				ks : { type : 's' },
				description : { type : 's' },
				createdAt : { type : 'd' },
				updatedAt : { type : 'd' },
				userIp : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTrackEntry'] = KalturaTrackEntry;