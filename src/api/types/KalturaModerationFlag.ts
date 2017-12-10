
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaModerationObjectType } from './KalturaModerationObjectType';
import { KalturaModerationFlagStatus } from './KalturaModerationFlagStatus';
import { KalturaModerationFlagType } from './KalturaModerationFlagType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaModerationFlagArgs  extends KalturaObjectBaseArgs {
    flaggedEntryId? : string;
	flaggedUserId? : string;
	comments? : string;
	flagType? : KalturaModerationFlagType;
}


export class KalturaModerationFlag extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	readonly userId : string;
	readonly moderationObjectType : KalturaModerationObjectType;
	flaggedEntryId : string;
	flaggedUserId : string;
	readonly status : KalturaModerationFlagStatus;
	comments : string;
	flagType : KalturaModerationFlagType;
	readonly createdAt : Date;
	readonly updatedAt : Date;

    constructor(data? : KalturaModerationFlagArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaModerationFlag' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				userId : { type : 's', readOnly : true },
				moderationObjectType : { type : 'es', readOnly : true, subTypeConstructor : KalturaModerationObjectType, subType : 'KalturaModerationObjectType' },
				flaggedEntryId : { type : 's' },
				flaggedUserId : { type : 's' },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaModerationFlagStatus, subType : 'KalturaModerationFlagStatus' },
				comments : { type : 's' },
				flagType : { type : 'en', subTypeConstructor : KalturaModerationFlagType, subType : 'KalturaModerationFlagType' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaModerationFlag',KalturaModerationFlag);
