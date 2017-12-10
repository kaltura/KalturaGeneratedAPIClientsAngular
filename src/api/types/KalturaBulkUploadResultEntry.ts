
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadResultEntryArgs  extends KalturaBulkUploadResultArgs {
    entryId? : string;
	title? : string;
	description? : string;
	tags? : string;
	url? : string;
	contentType? : string;
	conversionProfileId? : number;
	accessControlProfileId? : number;
	category? : string;
	scheduleStartDate? : number;
	scheduleEndDate? : number;
	entryStatus? : number;
	thumbnailUrl? : string;
	thumbnailSaved? : boolean;
	sshPrivateKey? : string;
	sshPublicKey? : string;
	sshKeyPassphrase? : string;
	creatorId? : string;
	entitledUsersEdit? : string;
	entitledUsersPublish? : string;
	ownerId? : string;
	referenceId? : string;
	templateEntryId? : string;
}


export class KalturaBulkUploadResultEntry extends KalturaBulkUploadResult {

    entryId : string;
	title : string;
	description : string;
	tags : string;
	url : string;
	contentType : string;
	conversionProfileId : number;
	accessControlProfileId : number;
	category : string;
	scheduleStartDate : number;
	scheduleEndDate : number;
	entryStatus : number;
	thumbnailUrl : string;
	thumbnailSaved : boolean;
	sshPrivateKey : string;
	sshPublicKey : string;
	sshKeyPassphrase : string;
	creatorId : string;
	entitledUsersEdit : string;
	entitledUsersPublish : string;
	ownerId : string;
	referenceId : string;
	templateEntryId : string;

    constructor(data? : KalturaBulkUploadResultEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadResultEntry' },
				entryId : { type : 's' },
				title : { type : 's' },
				description : { type : 's' },
				tags : { type : 's' },
				url : { type : 's' },
				contentType : { type : 's' },
				conversionProfileId : { type : 'n' },
				accessControlProfileId : { type : 'n' },
				category : { type : 's' },
				scheduleStartDate : { type : 'n' },
				scheduleEndDate : { type : 'n' },
				entryStatus : { type : 'n' },
				thumbnailUrl : { type : 's' },
				thumbnailSaved : { type : 'b' },
				sshPrivateKey : { type : 's' },
				sshPublicKey : { type : 's' },
				sshKeyPassphrase : { type : 's' },
				creatorId : { type : 's' },
				entitledUsersEdit : { type : 's' },
				entitledUsersPublish : { type : 's' },
				ownerId : { type : 's' },
				referenceId : { type : 's' },
				templateEntryId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadResultEntry',KalturaBulkUploadResultEntry);
