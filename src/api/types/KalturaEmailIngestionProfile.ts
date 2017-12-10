
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryModerationStatus } from './KalturaEntryModerationStatus';
import { KalturaEmailIngestionProfileStatus } from './KalturaEmailIngestionProfileStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEmailIngestionProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	description? : string;
	emailAddress? : string;
	mailboxId? : string;
	conversionProfile2Id? : number;
	moderationStatus? : KalturaEntryModerationStatus;
	defaultCategory? : string;
	defaultUserId? : string;
	defaultTags? : string;
	defaultAdminTags? : string;
	maxAttachmentSizeKbytes? : number;
	maxAttachmentsPerMail? : number;
}


export class KalturaEmailIngestionProfile extends KalturaObjectBase {

    readonly id : number;
	name : string;
	description : string;
	emailAddress : string;
	mailboxId : string;
	readonly partnerId : number;
	conversionProfile2Id : number;
	moderationStatus : KalturaEntryModerationStatus;
	readonly status : KalturaEmailIngestionProfileStatus;
	readonly createdAt : string;
	defaultCategory : string;
	defaultUserId : string;
	defaultTags : string;
	defaultAdminTags : string;
	maxAttachmentSizeKbytes : number;
	maxAttachmentsPerMail : number;

    constructor(data? : KalturaEmailIngestionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEmailIngestionProfile' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				description : { type : 's' },
				emailAddress : { type : 's' },
				mailboxId : { type : 's' },
				partnerId : { type : 'n', readOnly : true },
				conversionProfile2Id : { type : 'n' },
				moderationStatus : { type : 'en', subTypeConstructor : KalturaEntryModerationStatus, subType : 'KalturaEntryModerationStatus' },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaEmailIngestionProfileStatus, subType : 'KalturaEmailIngestionProfileStatus' },
				createdAt : { type : 's', readOnly : true },
				defaultCategory : { type : 's' },
				defaultUserId : { type : 's' },
				defaultTags : { type : 's' },
				defaultAdminTags : { type : 's' },
				maxAttachmentSizeKbytes : { type : 'n' },
				maxAttachmentsPerMail : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEmailIngestionProfile',KalturaEmailIngestionProfile);
